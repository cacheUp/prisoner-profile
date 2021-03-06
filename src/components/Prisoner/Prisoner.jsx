/**@jsx jsx */
import { UserContext } from "../../providers/UserProvider";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import { css, jsx } from "@emotion/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./prisoner.css";

import {
  bagel,
  waffle,
  dutyCheck1,
  dutyCheck2,
  dutyCheck3,
  dutyCheck4
} from "../../utilities";
import PrisonerDeleteDialog from "./PrisonerDeleteDialog";
import {
  PrisonerNameContext,
  PrisonerAgeContext,
  PrisonerGenderContext,
  PrisonerPermissionsContext,
  SummaryContext,
  Skill1Context,
  Skill2Context,
  Skill3Context,
  Skill4Context,
  OneEmployerContext,
  OnePositionContext,
  OneStartDateContext,
  OneEndDateContext,
  OneCityContext,
  OneStateContext,
  OneDuty1Context,
  OneDuty2Context,
  OneDuty3Context,
  OneDuty4Context,
  TwoEmployerContext,
  TwoPositionContext,
  TwoStartDateContext,
  TwoEndDateContext,
  TwoCityContext,
  TwoStateContext,
  TwoDuty1Context,
  TwoDuty2Context,
  TwoDuty3Context,
  TwoDuty4Context,
  ThreeEmployerContext,
  ThreePositionContext,
  ThreeStartDateContext,
  ThreeEndDateContext,
  ThreeCityContext,
  ThreeStateContext,
  ThreeDuty1Context,
  ThreeDuty2Context,
  ThreeDuty3Context,
  ThreeDuty4Context,
  FourEmployerContext,
  FourPositionContext,
  FourStartDateContext,
  FourEndDateContext,
  FourCityContext,
  FourStateContext,
  FourDuty1Context,
  FourDuty2Context,
  FourDuty3Context,
  FourDuty4Context,
  PrisonerEditContext,
  PrisonerProfileIdContext
} from "../../providers/PrisonerFormProvider";
/***************************************************************** emotion css ******** */
const prisonerIcon = css`
  height: 50px;
  width: 50px;
`;

const subContainer = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const workListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const item = css`
  justify-self: flex-start;
  max-width: 100%;
  font-size: 14;
  padding-left: 4px;
  padding-right: 4px;
`;

let listSection = css`
  margin-top: 20px;
  border: 1px solid #cdcdcd;
`;
const listSection1 = css`
  display: none;
  padding-bottom: 60px;
  margin-top: 20px;
  border: 1px solid #cdcdcd;
`;

const listText = css`
  width: 100%;
  max-width: 100%;
  display: block;
  font-size: 14px;
`;
const cityText = css`
  font-size: 12px;
`;
const xp = css`
  font-size: 13 !important;
  border-bottom: 1px solid black;
`;

const styles = {
  card: {
    maxWidth: 300
  },

  actions: {
    display: "flex"
  },

  expandOpen: {
    transform: "rotate(180deg)"
  },
  p: {
    textAlign: "center"
  },
  bullet: {
    fontSize: 20,
    textAlign: "center"
  },
  avatar: {
    height: 50,
    width: 50
  },

  title: {
    fontSize: 16,
    textDecoration: "underline"
  },
  subheader: {
    fontSize: 14
  },
  listIcon: {
    height: 10,
    width: 10
  },
  cardContent: {
    display: "grid",
    paddingBottom: 0,
    paddingTop: 0
  },
  subTit: {
    justifySelf: "center",
    textDecoration: "underline",
    marginBottom: 3,
    fontSize: 14,
    fontWeight: 800
  },
  summary: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: "justify",
    border: "1px solid #CDCDCD",
    borderBottom: "none",
    fontSize: 14,
    lineHeight: 1.4
  },
  cardHeader: {
    borderBottom: "1px solid #CDCDCD"
  },
  h6: {
    fontSize: 15
  },
  date: {
    fontSize: 12
  },
  test: {
    fontSize: 15
  },
  xp: { fontSize: 13, borderBottom: "1px solid black" },
  xPar: {
    display: "grid",
    justifyItems: "center"
  },
  dutyPar: {
    display: "grid",
    justifyContent: "center",
    lineHeight: 1,
    marginTop: 10
  },
  bottomCollapse: {
    display: "grid",
    justifyContent: "flex-end"
  },
  duty: {
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5
  },
  listN: {
    paddingLeft: 5,
    paddingRight: 5
  },
  permissions: {
    fontSize: 14,
    color: "red ",
    lineHeight: 1
  },
  lItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  skillText: {
    fontSize: 14,
    lineHeight: 1.2
  }
};

/********************************************   FUNCTION START  ******************************* */
const Prisoner = props => {
  const currentUser = useContext(UserContext);
  const user = props.user;
  const belongsToCurrentUser = (currentUser, postAuthor) => {
    if (!currentUser) return false;
    return currentUser.uid === postAuthor.uid;
  };

  const marginStyle = css`
    margin-top: 25px;
  `;
  !belongsToCurrentUser(currentUser, user) &&
    css`
      margin-top: 25px;
    `;
  /**********************************************  State ****************************** */

  const [expanded, setExpanded] = React.useState(false);
  /***********************************************  Context State  ******************************** */

  const { prisonerProfileId, setPrisonerProfileId } = useContext(
    PrisonerProfileIdContext
  );

  const { prisonerEdit, setPrisonerEdit } = useContext(PrisonerEditContext);
  const { prisonerName, setPrisonerName } = useContext(PrisonerNameContext);
  const { prisonerAge, setPrisonerAge } = useContext(PrisonerAgeContext);
  const { prisonerGender, setPrisonerGender } = useContext(
    PrisonerGenderContext
  );
  const { prisonerPermissions, setPrisonerPermissions } = useContext(
    PrisonerPermissionsContext
  );
  const { summary, setSummary } = useContext(SummaryContext);
  const { skill1, setSkill1 } = useContext(Skill1Context);
  const { skill2, setSkill2 } = useContext(Skill2Context);
  const { skill3, setSkill3 } = useContext(Skill3Context);
  const { skill4, setSkill4 } = useContext(Skill4Context);
  const { oneEmployer, setOneEmployer } = useContext(OneEmployerContext);
  const { onePosition, setOnePosition } = useContext(OnePositionContext);
  const { oneStartDate, setOneStartDate } = useContext(OneStartDateContext);
  const { oneEndDate, setOneEndDate } = useContext(OneEndDateContext);
  const { oneCity, setOneCity } = useContext(OneCityContext);
  const { oneState, setOneState } = useContext(OneStateContext);
  const { oneDuty1, setOneDuty1 } = useContext(OneDuty1Context);
  const { oneDuty2, setOneDuty2 } = useContext(OneDuty2Context);
  const { oneDuty3, setOneDuty3 } = useContext(OneDuty3Context);
  const { oneDuty4, setOneDuty4 } = useContext(OneDuty4Context);
  const { twoEmployer, setTwoEmployer } = useContext(TwoEmployerContext);
  const { twoPosition, setTwoPosition } = useContext(TwoPositionContext);
  const { twoStartDate, setTwoStartDate } = useContext(TwoStartDateContext);
  const { twoEndDate, setTwoEndDate } = useContext(TwoEndDateContext);
  const { twoCity, setTwoCity } = useContext(TwoCityContext);
  const { twoState, setTwoState } = useContext(TwoStateContext);
  const { twoDuty1, setTwoDuty1 } = useContext(TwoDuty1Context);
  const { twoDuty2, setTwoDuty2 } = useContext(TwoDuty2Context);
  const { twoDuty3, setTwoDuty3 } = useContext(TwoDuty3Context);
  const { twoDuty4, setTwoDuty4 } = useContext(TwoDuty4Context);
  const { threeEmployer, setThreeEmployer } = useContext(ThreeEmployerContext);
  const { threePosition, setThreePosition } = useContext(ThreePositionContext);
  const { threeStartDate, setThreeStartDate } = useContext(
    ThreeStartDateContext
  );
  const { threeEndDate, setThreeEndDate } = useContext(ThreeEndDateContext);
  const { threeCity, setThreeCity } = useContext(ThreeCityContext);
  const { threeState, setThreeState } = useContext(ThreeStateContext);
  const { threeDuty1, setThreeDuty1 } = useContext(ThreeDuty1Context);
  const { threeDuty2, setThreeDuty2 } = useContext(ThreeDuty2Context);
  const { threeDuty3, setThreeDuty3 } = useContext(ThreeDuty3Context);
  const { threeDuty4, setThreeDuty4 } = useContext(ThreeDuty4Context);
  const { fourEmployer, setFourEmployer } = useContext(FourEmployerContext);
  const { fourPosition, setFourPosition } = useContext(FourPositionContext);
  const { fourStartDate, setFourStartDate } = useContext(FourStartDateContext);
  const { fourEndDate, setFourEndDate } = useContext(FourEndDateContext);
  const { fourCity, setFourCity } = useContext(FourCityContext);
  const { fourState, setFourState } = useContext(FourStateContext);
  const { fourDuty1, setFourDuty1 } = useContext(FourDuty1Context);
  const { fourDuty2, setFourDuty2 } = useContext(FourDuty2Context);
  const { fourDuty3, setFourDuty3 } = useContext(FourDuty3Context);
  const { fourDuty4, setFourDuty4 } = useContext(FourDuty4Context);

  /*****************************************   Expand and Edit  ************************************************* */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const editClick = () => {
    setPrisonerProfileId(props.id);
    setPrisonerEdit(true);
    props.dialogClick();
    setPrisonerName(props.generalInfo.prisonerName);

    setPrisonerAge(props.generalInfo.prisonerAge);

    setPrisonerPermissions(props.generalInfo.prisonerPermissions);

    setSummary(props.skills.summary);

    setSkill1(props.skills.skill1);

    setSkill2(props.skills.skill2);

    setSkill3(props.skills.skill3);

    setSkill4(props.skills.skill4);

    setOneEmployer(props.workExperience1.oneEmployer);

    setOnePosition(props.workExperience1.onePosition);

    setOneStartDate(props.workExperience1.oneStartDate);

    setOneEndDate(props.workExperience1.oneEndDate);

    setOneCity(props.workExperience1.oneCity);

    setOneState(props.workExperience1.oneState);

    setOneDuty1(props.workExperience1.oneDuty1);

    setOneDuty2(props.workExperience1.oneDuty2);

    setOneDuty3(props.workExperience1.oneDuty3);

    setOneDuty4(props.workExperience1.oneDuty4);

    setTwoEmployer(props.workExperience2.twoEmployer);

    setTwoPosition(props.workExperience2.twoPosition);

    setTwoStartDate(props.workExperience2.twoStartDate);

    setTwoEndDate(props.workExperience2.twoEndDate);

    setTwoCity(props.workExperience2.twoCity);

    setTwoState(props.workExperience2.twoState);

    setTwoDuty1(props.workExperience2.twoDuty1);

    setTwoDuty2(props.workExperience2.twoDuty2);

    setTwoDuty3(props.workExperience2.twoDuty3);

    setTwoDuty4(props.workExperience2.twoDuty4);

    setThreeEmployer(props.workExperience3.threeEmployer);

    setThreePosition(props.workExperience3.threePosition);

    setThreeStartDate(props.workExperience3.threeStartDate);

    setThreeEndDate(props.workExperience3.threeEndDate);

    setThreeCity(props.workExperience3.threeCity);

    setThreeState(props.workExperience3.threeState);

    setThreeDuty1(props.workExperience3.threeDuty1);

    setThreeDuty2(props.workExperience3.threeDuty2);

    setThreeDuty3(props.workExperience3.threeDuty3);

    setThreeDuty4(props.workExperience3.threeDuty4);

    setFourEmployer(props.workExperience4.fourEmployer);

    setFourPosition(props.workExperience4.fourPosition);

    setFourStartDate(props.workExperience4.fourStartDate);

    setFourEndDate(props.workExperience4.fourEndDate);

    setFourCity(props.workExperience4.fourCity);

    setFourState(props.workExperience4.fourState);

    setFourDuty1(props.workExperience4.fourDuty1);

    setFourDuty2(props.workExperience4.fourDuty2);

    setFourDuty3(props.workExperience4.fourDuty3);

    setFourDuty4(props.workExperience4.fourDuty4);
  };

  /***********************************   functions to undisplay previous experience if its empty ********  */
  let a = bagel(props.skills);
  const summaryCheck =
    props.skills.summary !== ""
      ? css`
          display: grid;
        `
      : css`
          display: none;
        `;

  const skillCheck =
    a > 3
      ? css`
          display: none;
        `
      : css`
          display: grid;
          padding: 0px;
        `;

  let listSection =
    waffle(props.workExperience1) > 5
      ? css`
          display: none;
        `
      : css`
          margin-left: 4px !important;
          margin-right: 4px !important;
          border: 1px solid #cdcdcd;
          padding-bottom: 20px;
        `;

  let listSection2 =
    waffle(props.workExperience2) > 5
      ? css`
          display: none;
        `
      : css`
          padding-bottom: 20px;
          margin-top: 20px;
          border: 1px solid #cdcdcd;
        `;

  let listSection3 =
    waffle(props.workExperience3) > 5
      ? css`
          display: none;
        `
      : css`
          padding-bottom: 20px;
          margin-top: 20px;
          border: 1px solid #cdcdcd;
        `;

  let listSection4 =
    waffle(props.workExperience4) > 5
      ? css`
          display: none;
        `
      : css`
          padding-bottom: 20px;
          margin-top: 20px;
          border: 1px solid #cdcdcd;
        `;

  let date1 =
    props.workExperience1.oneStartDate === "" ||
    props.workExperience1.oneEndDate === ""
      ? css`
          display: none;
        `
      : css`
          font-size: 12px;
          line-height: 1;
        `;

  let date3 =
    props.workExperience3.threeStartDate === "" ||
    props.workExperience3.threeEndDate === ""
      ? css`
          display: none;
        `
      : css`
          font-size: 12px;
          line-height: 1;
        `;

  let date2 =
    props.workExperience2.twoStartDate === "" ||
    props.workExperience2.twoEndDate === ""
      ? css`
          display: none;
        `
      : css`
          font-size: 12px;
          line-height: 1;
        `;
  let date4 =
    props.workExperience4.fourStartDate === "" ||
    props.workExperience4.fourEndDate === ""
      ? css`
          display: none;
        `
      : css`
          font-size: 12px;
          line-height: 1;
        `;

  let comma1 =
    props.workExperience1.oneCity === "" ||
    props.workExperience1.oneState === ""
      ? ""
      : " , ";

  let comma2 =
    props.workExperience2.twoCity === "" ||
    props.workExperience2.twoState === ""
      ? ""
      : " , ";

  let comma3 =
    props.workExperience3.threeCity === "" ||
    props.workExperience3.threeState === ""
      ? ""
      : " , ";

  let comma4 =
    props.workExperience4.fourCity === "" ||
    props.workExperience4.fourState === ""
      ? ""
      : " , ";

  /** **********************************************  Duty Logic ************* */

  let d1w1 =
    props.workExperience1.oneDuty1 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d2w1 =
    props.workExperience1.oneDuty2 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d3w1 =
    props.workExperience1.oneDuty3 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d4w1 =
    props.workExperience1.oneDuty4 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d1w2 =
    props.workExperience2.twoDuty1 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d2w2 =
    props.workExperience2.twoDuty2 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d3w2 =
    props.workExperience2.twoDuty3 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d4w2 =
    props.workExperience2.twoDuty4 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d1w3 =
    props.workExperience3.threeDuty1 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d2w3 =
    props.workExperience3.threeDuty2 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d3w3 =
    props.workExperience3.threeDuty3 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d4w3 =
    props.workExperience3.threeDuty4 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;

  let d1w4 =
    props.workExperience4.fourDuty1 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;
  let d2w4 =
    props.workExperience4.fourDuty2 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;
  let d3w4 =
    props.workExperience4.fourDuty3 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;
  let d4w4 =
    props.workExperience4.fourDuty4 === ""
      ? css`
          display: none !important;
        `
      : css`
          font-size: 14px;
        `;
  /********************************************************************** */
  /**********************************************  styles for material ui   ******************** */

  const { classes } = props;
  /***************************************************************** current user function */

  /******************************************************* */
  return (
    <div css={marginStyle}>
      {console.log(props.id)}
      {belongsToCurrentUser(currentUser, user) && (
        <div className="edit-delete-container">
          <div className="edit-wrapper" onClick={() => editClick()}>
            <span className="edit-icon">edit</span>
            <img src={require("../Images/pedit.png")} alt="edit" />
          </div>
          <PrisonerDeleteDialog
            DeleteDialog
            id={props.id}
            postId={props.postId}
          />
        </div>
      )}

      <Card className={classes.card}>
        {/********************************************** Card Header ***************/}
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              sizes="large"
            >
              <img
                src={require("../Images/p.png")}
                alt="avatar"
                css={prisonerIcon}
              />
            </Avatar>
          }
          title={
            <div css={subContainer}>
              <Typography className={classes.title}>{`${
                props.generalInfo.prisonerName
              }`}</Typography>

              <Typography className={classes.subheader}>{`${
                props.generalInfo.prisonerAge
              } year olds, ${props.generalInfo.prisonerGender}`}</Typography>
            </div>
          }
          subheader={
            <Typography component="p" className={classes.permissions}>
              {props.generalInfo.prisonerPermissions}
            </Typography>
          }
        />

        {/****************************************************  Summary   **********************  */}
        <CardContent className={classes.cardContent}>
          <div css={summaryCheck}>
            <Typography component="p" variant="h6" className={classes.subTit}>
              Summary
            </Typography>
            <Typography component="p" className={classes.summary}>
              {props.skills.summary}
            </Typography>{" "}
            {console.log(props.workExperience3.threeDuty1)}
          </div>

          {/*****************************************************************    Skill Section   */}

          <Typography variant="h6" className={classes.subTit}>
            {" "}
            Skills{" "}
          </Typography>

          {/********************************************************************* Skill 1 */}
          <List dense className={classes.skillText}>
            <ListItem variant="li" css={item} className={classes.lItem}>
              <ListItemText className={classes.skillText}>{`- ${
                props.skills.skill1
              }`}</ListItemText>
            </ListItem>

            {/********************************************************************* Skill 2 */}

            <ListItem variant="li" css={item} className={classes.lItem}>
              <ListItemText className={classes.skillText}>{`- ${
                props.skills.skill2
              }`}</ListItemText>
            </ListItem>

            {/********************************************************************* Skill 3 */}

            <ListItem variant="li" css={item} className={classes.lItem}>
              <ListItemText className={classes.skillText}>{`- ${
                props.skills.skill3
              }`}</ListItemText>
            </ListItem>

            {/********************************************************************* Skill 4 */}

            <ListItem
              variant="li"
              css={item}
              className={`${classes.lItem} ${classes.skillText}`}
            >
              <ListItemText className={classes.skillText}>{`- ${
                props.skills.skill4
              }`}</ListItemText>
            </ListItem>
          </List>

          {/******************************************************  Expand    *********************************/}
        </CardContent>

        <div className={classes.xPar}>
          <CardActions className={classes.actions} disableActionSpacing>
            <Typography variant="h6" className={classes.xp}>
              Previous Work Experience
            </Typography>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/* ************************************************************      Previous Work Experience 1 *************     */}
          <CardContent>
            <div css={listSection}>
              <div css={workListContainer}>
                <List dense>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      className={classes.duty}
                      primary={props.workExperience1.oneEmployer}
                      secondary={props.workExperience1.onePosition}
                    />
                  </ListItem>
                </List>

                <List dense className={classes.listN}>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      css={cityText}
                      className={classes.duty}
                      primary={`${props.workExperience1.oneCity}${comma1}${
                        props.workExperience1.oneState
                      }`}
                      secondary={
                        <Typography css={date1} className={classes.duty}>
                          {`${props.workExperience1.oneStartDate} to ${
                            props.workExperience1.oneEndDate
                          }`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </div>

              <List dense className={classes.dutyPar}>
                <ListItem css={d1w1}>
                  - {props.workExperience1.oneDuty1}
                </ListItem>
                <ListItem css={d2w1}>
                  - {props.workExperience1.oneDuty2}
                </ListItem>
                <ListItem css={d3w1}>
                  - {props.workExperience1.oneDuty3}
                </ListItem>
                <ListItem css={d4w1}>
                  - {props.workExperience1.oneDuty4}
                </ListItem>
              </List>
            </div>
            {/* *****************************************************   Work Experience 2   ****************************************************************** */}

            <div css={listSection2}>
              <div css={workListContainer}>
                <List dense>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      className={classes.duty}
                      primary={props.workExperience2.twoEmployer}
                      secondary={props.workExperience2.twoPosition}
                    />
                  </ListItem>
                </List>

                <List dense className={classes.listN}>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      css={cityText}
                      className={classes.duty}
                      primary={`${props.workExperience2.twoCity}${comma2}${
                        props.workExperience2.twoState
                      }`}
                      secondary={
                        <Typography css={date2} className={classes.duty}>
                          {`${props.workExperience2.twoStartDate} to ${
                            props.workExperience2.twoEndDate
                          }`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </div>

              <List dense className={classes.dutyPar}>
                <ListItem css={d1w2}>
                  - {props.workExperience2.twoDuty1}
                </ListItem>
                <ListItem css={d2w2}>
                  - {props.workExperience2.twoDuty2}
                </ListItem>
                <ListItem css={d3w2}>
                  - {props.workExperience2.twoDuty3}
                </ListItem>
                <ListItem css={d4w2}>
                  - {props.workExperience2.twoDuty4}
                </ListItem>
              </List>
            </div>

            {/* *****************************************************   Work Experience 3  ****************************************************************** */}

            <div css={listSection3}>
              <div css={workListContainer}>
                <List dense className={classes.listN}>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      className={classes.duty}
                      primary={props.workExperience3.threeEmployer}
                      secondary={props.workExperience3.threePosition}
                    />
                  </ListItem>
                </List>

                <List dense>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      css={cityText}
                      className={classes.duty}
                      primary={`${props.workExperience3.threeCity}${comma3}${
                        props.workExperience3.threeState
                      }`}
                      secondary={
                        <Typography css={date3} className={classes.duty}>
                          {`${props.workExperience3.threeStartDate} to ${
                            props.workExperience3.threeEndDate
                          }`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </div>

              <List dense className={classes.dutyPar}>
                <ListItem css={d1w3}>
                  - {props.workExperience3.threeDuty1}
                </ListItem>
                <ListItem css={d2w3}>
                  - {props.workExperience3.threeDuty2}
                </ListItem>
                <ListItem css={d3w3}>
                  - {props.workExperience3.threeDuty3}
                </ListItem>
                <ListItem css={d4w3}>
                  - {props.workExperience3.threeDuty4}
                </ListItem>
              </List>
            </div>

            {/* *****************************************************   Work Experience 4  ****************************************************************** */}

            <div css={listSection4}>
              <div css={workListContainer}>
                <List dense className={classes.listN}>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      className={classes.duty}
                      primary={props.workExperience4.fourEmployer}
                      secondary={props.workExperience4.fourPosition}
                    />
                  </ListItem>
                </List>

                <List dense>
                  <ListItem className={classes.listN}>
                    <ListItemText
                      css={cityText}
                      className={classes.duty}
                      primary={`${props.workExperience4.fourCity}${comma4}${
                        props.workExperience4.fourState
                      }`}
                      secondary={
                        <Typography css={date4} className={classes.duty}>
                          {`${props.workExperience4.fourStartDate} to ${
                            props.workExperience4.fourEndDate
                          }`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </div>

              <List dense className={classes.dutyPar}>
                <ListItem css={d1w4}>
                  - {props.workExperience4.fourDuty1}
                </ListItem>
                <ListItem css={d2w4}>
                  - {props.workExperience4.fourDuty2}
                </ListItem>
                <ListItem css={d3w4}>
                  - {props.workExperience4.fourDuty3}
                </ListItem>
                <ListItem css={d4w4}>
                  - {props.workExperience4.fourDuty4}
                </ListItem>
              </List>
            </div>

            {/* *****************************************************   ****************************************************************** */}
          </CardContent>

          <CardActions className={classes.bottomCollapse} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Collapse>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Prisoner);
