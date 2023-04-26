// lib
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import { Avatar, Card, List, Skeleton } from "antd";

// api
import { getCompetitions } from "../../../api/api";

/**
 * Компонент для отрисовки футбольных лиг
 * @returns FC
 */
export const CompetitionsTable: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CompetitionProps>();

  const navigate = useNavigate();

  const fetch = async () => {
    setLoading(true);
    const res: CompetitionProps = await getCompetitions().then((res) => res);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <List
        dataSource={data?.competitions}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 3, xxl: 4 }}
        renderItem={(item) => (
          <List.Item>
            <Skeleton
              active
              title
              round
              paragraph={{ rows: 1 }}
              loading={loading}
            >
              <Card
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/table/choice/competition/${item.id}`, {
                    replace: true,
                    state: item,
                  });
                  console.log(item);
                }}
                hoverable
                bordered={true}
              >
                <Card.Meta
                  avatar={<Avatar src={item?.emblem} size={64} />}
                  title={item.name?.toUpperCase()}
                  description={item.area?.name}
                />
              </Card>
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
