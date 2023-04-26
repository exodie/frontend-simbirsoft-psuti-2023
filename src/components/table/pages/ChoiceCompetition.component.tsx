// lib
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// styles
import { Descriptions, Avatar, Row, Col, Table, Typography } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { getTeamsFromCompetitions } from "../../../api/api";

/**
 * Компонент который должен отрисовывать информацию по выбранному competition
 * @returns FC
 */
export const ChoiceCompetition: FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<
    Array<{ id: number; name: string; tla: string; crest: string; founded: number; }>
  >([]);

  const fetch = async () => {
    if (data.length > 1) return;
    const res = await getTeamsFromCompetitions(state.id);

    res.map((item) => {
      setData((v) => [...v, ...[
        {
          id: item.id,
          name: item.name,
          tla: item.tla,
          crest: item.crest,
          founded: item.founded,
        },
      ]]);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  const modData = () => {
    return data.map(({ ...item }) => ({
      ...item,
      crest: <Avatar src={item.crest} size={64} />,
      name: <Typography.Link onClick={() => console.log(item.id)}>{item.name}</Typography.Link>,
      key: item.id,
    }));
  };

  const columns = [
    { title: "Img", dataIndex: "crest", key: "crest" },
    { title: "Teams", dataIndex: "name", key: "name" },
    { title: "Tag", dataIndex: "tla", key: "tla" },
    { title: "Founded", dataIndex: "founded", key: "founded" }

  ];

  return (
    <section className="competition-choice">
      <PageHeader
        ghost={false}
        onBack={() => navigate("/table/competitions")}
        title={state.name}
        subTitle={state.code}
        avatar={{ src: state.emblem }}
      >
        <Row justify="space-between" className="competition-choice_row">
          <Col flex="1" xs={24} md={24} lg={18} xl={20}>
            <Descriptions title="Information">
              <Descriptions.Item label="Area">
                {state.area?.name}
              </Descriptions.Item>
              <Descriptions.Item label="Current Season">
                {state.currentSeason.startDate} - {state.currentSeason.endDate}
              </Descriptions.Item>
              <Descriptions.Item label="Current match day">
                {state.currentSeason.currentMatchday}
              </Descriptions.Item>
              <Descriptions.Item label="Current match day">
                {state.currentSeason.currentMatchday}
              </Descriptions.Item>
              <Descriptions.Item label="Type">{state.type}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </PageHeader>

      <Table dataSource={modData()} columns={columns} />
    </section>
  );
};
