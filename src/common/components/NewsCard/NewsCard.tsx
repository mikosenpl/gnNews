import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DisplayMethod } from '../../enums/DisplayMethod';
import { Article } from '../../models/News';
import { CardNews, BottomCard, ListNews } from './NewsCard.styles';
import { RootState } from '../../store/store';

const { Meta } = Card;

interface NewsCardProps {
  article: Article;
}

const NewsCard = (props: NewsCardProps) => {
  const displayMethod = useSelector((state: RootState) => state.display.method);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEllipsisClick = () => {
    if (props.article.url) {
      window.open(props.article.url, '_blank');
    } else {
      window.open('', '_blank');
    }
  };

  const date = new Date(props.article.publishedAt ?? '');
  const minute = date.getUTCMinutes();
  const hour = date.getUTCHours().toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  const formattedDate = !isNaN(minute)
    ? `, ${hour}:${minute} - ${day}.${month}.${year}`
    : '';

  return (
    <>
      {displayMethod === DisplayMethod.CARDS ? (
        <CardNews
          hoverable
          data-testid="card-news"
          cover={<img alt={'image'} src={props.article.urlToImage ?? ''} />}
          onClick={showModal}
        >
          <Meta
            title={props.article.title}
            description={props.article.description}
          />
          <BottomCard description={props.article.source.name + formattedDate} />
        </CardNews>
      ) : (
        <ListNews hoverable onClick={showModal}>
          <Meta
            title={props.article.title}
            description={props.article.description}
          />
          <BottomCard description={props.article.source.name + formattedDate} />
        </ListNews>
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ padding: 0 }}
        width={'80vw'}
        footer={null}
      >
        <Card
          hoverable
          style={{ width: '80vw' }}
          cover={<img alt={'image'} src={props.article.urlToImage ?? ''} />}
          actions={[
            <EllipsisOutlined
              key="ellipsis"
              data-testid="ellipsis-button"
              style={{ fontSize: '50px' }}
              onClick={handleEllipsisClick}
            />,
          ]}
        >
          <Meta
            title={props.article.title}
            description={props.article.content}
          />
          <BottomCard description={props.article.source.name + formattedDate} />
        </Card>
      </Modal>
    </>
  );
};

export default NewsCard;
