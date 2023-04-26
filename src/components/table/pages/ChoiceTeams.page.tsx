// lib
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// styles
import { PageHeader } from "@ant-design/pro-layout";
import { Avatar, Col, Descriptions, List, Row, Table, Tabs, Typography } from "antd";

// api
import { getTeamsWithID } from "../../../api/api";

/**
 * Компонент который должен отрисовывать информацию по выбранному teams
 * @returns FC
 */
export const ChoiceTeam: FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<TeamProps>({} as TeamProps);

  const fetch = async () => {
    const res = await getTeamsWithID(state.id);

    setData(res);
  };

  useEffect(() => {
    fetch();
  }, []);

  const modData = () => {
    return data?.runningCompetitions?.map(({ ...item }) => ({
      ...item,
      key: item.id,
      emblem: <Avatar src={item.emblem} size={64} />,
    }));
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Emblem", dataIndex: "emblem", key: "emblem" },
  ];

  /**
   * todo: children: <Component />
   */
  const tabs = [
    {
      label: "Squad",
      key: "1",
      children: (
        <section className="choice-team-tab_squad">
          <Typography.Title>Squad</Typography.Title>
          <List
            dataSource={data.squad}
            renderItem={(item) => (
              <List.Item>
                <Descriptions column={2}>
                  <Descriptions.Item label="Name">
                    {item.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Position">
                    {item.position}
                  </Descriptions.Item>
                  <Descriptions.Item label="Date of birth">
                    {item.dateOfBirth}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nationality">
                    {item.nationality}
                  </Descriptions.Item>
                </Descriptions>
              </List.Item>
            )}
          />
        </section>
      ),
    },
    {
      label: "Running Competitions",
      key: "2",
      children: (
        <section className="choice-team-tab_table">
          <Table dataSource={modData()} columns={columns} />
        </section>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => navigate("/table/competitions")}
        title={state.name}
        subTitle={state.tla}
        avatar={{ src: state.crest, size: 64 }}
      >
        <Row justify="space-between" className="competition-choice_row">
          <Col flex="1" xs={24} md={24} lg={18} xl={20}>
            <Descriptions column={2} title="Information">
              <Descriptions.Item label="Short name">
                {data.shortName}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {data.address}
              </Descriptions.Item>
              <Descriptions.Item label="Website">
                {data.website}
              </Descriptions.Item>
              <Descriptions.Item label="Founded">
                {data.founded}
              </Descriptions.Item>
              <Descriptions.Item label="Club colors">
                {data.clubColors}
              </Descriptions.Item>
              <Descriptions.Item label="Venue">{data.venue}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </PageHeader>

      <Tabs className="choice-team-tab" defaultActiveKey="1" items={tabs} />
    </>
  );
};
