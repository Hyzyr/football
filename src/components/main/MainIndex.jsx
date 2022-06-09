import Footer from "./Footer.jsx";
import Manager, { ManagerInfo } from "./manager/Manager.jsx";
import Info, { Row } from "./info/Info";
import { connect } from "react-redux";
import List from "./info/List.jsx";

const MainIndex = ({
  topTransfers,
  topPlayers,
  topTeams,
  topTeamsForm,
  topTeamsFdr,
}) => (
  <>
    <Manager>
      <ManagerInfo title={"Fixtures"} />
    </Manager>

    {/* topTransfers */}
    {topTransfers && (
      <Info
        anchor="overview"
        title="Top Transfers"
        shortName="Transfers"
        moreButtonFunc={() => {
          alert("button clicked");
        }}
      >
        <Row cols={2}>
          <List
            title={"Top IN"}
            subtitles={["Player", "Total"]}
            data={topTransfers.in}
          />
          <List
            title={"Top OUT"}
            subtitles={["Player", "Total"]}
            data={topTransfers.out}
          />
        </Row>
      </Info>
    )}

    {/* topPlayers */}
    {/* topTeams */}
    {(topPlayers || topTeams) && (
      <Info
        anchor="stats"
        title="5 Games Momentum"
        shortName="stats"
        cols={3}
        moreButtonFunc={() => {
          alert("button clicked");
        }}
      >
        {topTeams && (
          <Row title={"Players"} cols={3}>
            <List
              title={"Player Goals"}
              subtitles={["Player", "Total"]}
              data={topPlayers.goals}
            />
            <List
              title={"Player Assits"}
              subtitles={["Player", "Total"]}
              data={topPlayers.assists}
            />
            <List
              title={"Players FPL Points"}
              subtitles={["Player", "Total"]}
              data={topPlayers.points}
            />
          </Row>
        )}
        {topPlayers && (
          <Row title={"Teams"} cols={3}>
            <List
              title={"Teams Goals"}
              subtitles={["Team", "Total"]}
              data={topTeams.goals}
            />
            <List
              title={"Teams Conceded"}
              subtitles={["Team", "Total"]}
              data={topTeams.conceded}
            />
            <List
              title={"Games with Clean Sheets"}
              subtitles={["Team", "Total"]}
              data={topTeams.cleansheets}
            />
          </Row>
        )}
      </Info>
    )}

    {/* topTeamsForm */}
    {topTeamsForm && (
      <Info anchor="form" title="Form" cols={2} showButton={false}>
        <Row cols={2}>
          <List
            title={"Best Form"}
            subtitles={["Team", "Form"]}
            data={topTeamsForm.best}
            type={"badges"}
          />
          <List
            title={"Worst Form"}
            subtitles={["Team", "Form"]}
            data={topTeamsForm.worst}
            type={"badges"}
          />
        </Row>
      </Info>
    )}

    {/* topTeamsFdr */}
    {topTeamsFdr && (
      <Info
        title="FDR Snapshot"
        shortName="FDR"
        anchor="fdr"
        cols={2}
        moreButtonFunc={() => {
          alert("button clicked");
        }}
      >
        <Row cols={2}>
          <List
            title={"Best FDR"}
            subtitles={["Team", "FDR"]}
            data={topTeamsFdr.best}
            type={"badges"}
            badgesKey={"fdr"}
          />
          <List
            title={"Worst FDR"}
            subtitles={["Team", "FDR"]}
            data={topTeamsFdr.worst}
            type={"badges"}
            badgesKey={"fdr"}
          />
        </Row>
      </Info>
    )}
    <Footer />
  </>
);

const mapStateToProps = (state) => ({
  topTransfers: state.app.topTransfers,
  topPlayers: state.app.topPlayers,
  topTeams: state.app.topTeams,
  topTeamsForm: state.app.topTeamsForm,
  topTeamsFdr: state.app.topTeamsFdr,
});

export default connect(mapStateToProps)(MainIndex);
