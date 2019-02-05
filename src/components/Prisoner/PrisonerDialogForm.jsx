/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import "../../App.css";
import { auth, firestore } from "../../firebase";
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
  FourDuty4Context
} from "../../providers/PrisonFormProvider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

function PrisonDialogForm(props) {
  const [opens, setOpens] = React.useState(false);
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
  const handlePrisonerChanges = e => {
    switch (e.target.name) {
      case "prisonerName":
        setPrisonerName(e.target.value);
        break;
      case "prisonerAge":
        setPrisonerAge(e.target.value);
        break;
      case "prisonerGender":
        setPrisonerGender(e.target.value);
        break;
      case "prisonerPermissions":
        setPrisonerPermissions(e.target.value);
        break;
      case "summary":
        setSummary(e.target.value);
        break;
      case "skill1":
        setSkill1(e.target.value);
        break;
      case "skill2":
        setSkill3(e.target.value);
        break;
      case "skill4":
        setSkill4(e.target.value);
        break;
      case "oneEmployer":
        setOneEmployer(e.target.value);
        break;
      case "onePosition":
        setOnePosition(e.target.value);
        break;
      case "oneStartDate":
        setOneStartDate(e.target.value);
        break;
      case "oneEndDate":
        setOneEndDate(e.target.value);
        break;
      case "oneCity":
        setOneCity(e.target.value);
        break;
      case "oneState":
        setOneState(e.target.value);
        break;
      case "oneDuty1":
        setOneDuty1(e.target.value);
        break;
      case "oneDuty2":
        setOneDuty2(e.target.value);
        break;
      case "oneDuty3":
        setOneDuty3(e.target.value);
        break;
      case "oneDuty4":
        setOneDuty4(e.target.value);
        break;
      case "twoEmployer":
        setTwoEmployer(e.target.value);
        break;
      case "twoPosition":
        setTwoPosition(e.target.value);
        break;
      case "twoStartDate":
        setTwoStartDate(e.target.value);
        break;
      case "twoEndDate":
        setTwoEndDate(e.target.value);
        break;
      case "twoCity":
        setTwoCity(e.target.value);
        break;
      case "twoState":
        setTwoState(e.target.value);
        break;
      case "twoDuty1":
        setTwoDuty1(e.target.value);
        break;
      case "twoDuty2":
        setTwoDuty2(e.target.value);
        break;
      case "twoDuty3":
        setTwoDuty3(e.target.value);
        break;
      case "twoDuty4":
        setTwoDuty4(e.target.value);
        break;
      case "threeEmployer":
        setThreeEmployer(e.target.value);
        break;
      case "threePosition":
        setThreePosition(e.target.value);
        break;
      case "threeStartDate":
        setThreeStartDate(e.target.value);
        break;
      case "threeEndDate":
        setThreeEndDate(e.target.value);
        break;
      case "threeCity":
        setThreeCity(e.target.value);
        break;
      case "threeState":
        setThreeState(e.target.value);
        break;
      case "threeDuty1":
        setThreeDuty1(e.target.value);
        break;
      case "threeDuty2":
        setThreeDuty2(e.target.value);
        break;
      case "threeDuty3":
        setThreeDuty3(e.target.value);
        break;
      case "threeDuty4":
        setThreeDuty4(e.target.value);
        break;

      case "fourEmployer":
        setFourEmployer(e.target.value);
        break;
      case "fourPosition":
        setFourPosition(e.target.value);
        break;
      case "fourStartDate":
        setFourStartDate(e.target.value);
        break;
      case "fourEndDate":
        setFourEndDate(e.target.value);
        break;
      case "fourCity":
        setFourCity(e.target.value);
        break;
      case "fourState":
        setFourState(e.target.value);
        break;
      case "fourDuty1":
        setFourDuty1(e.target.value);
        break;
      case "fourDuty2":
        setFourDuty2(e.target.value);
        break;
      case "fourDuty3":
        setFourDuty3(e.target.value);
        break;
      case "fourDuty4":
        setFourDuty4(e.target.value);
        break;
    }
  };

  function handleClickOpen() {
    setOpens(true);
  }

  function handleClose() {
    setOpens(false);
  }

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handlePChange(event) {
    setPer(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const { uid, displayName, email, photoURL } = auth.currentUser || {};
    const post = {
      generalInfo: {
        prisonerName,
        prisonerAge,
        prisonerGender,
        prisonerPermissions
      },
      skills: {
        summary,
        skill1,
        skill2,
        skill3,
        skill4
      },
      workExperience1: {
        oneEmployer,
        onePosition,
        oneStartDate,
        oneEndDate,
        oneCity,
        oneState,
        oneDuty1,
        oneDuty2,
        oneDuty3,
        oneDuty4
      },

      workExperience2: {
        twoEmployer,
        twoPosition,
        twoStartDate,
        twoEndDate,
        twoCity,
        twoState,
        twoDuty1,
        twoDuty2,
        twoDuty3,
        twoDuty4
      },

      workExperience3: {
        threeEmployer,
        threePosition,
        threeStartDate,
        threeEndDate,
        threeCity,
        threeState,
        threeDuty1,
        threeDuty2,
        threeDuty3,
        threeDuty4
      },

      workExperience4: {
        fourEmployer,
        fourPosition,
        fourStartDate,
        fourEndDate,
        fourCity,
        fourState,
        fourDuty1,
        fourDuty2,
        fourDuty3,
        fourDuty4
      },

      user: {
        uid,
        displayName,
        email,
        photoURL
      },

      createdAt: new Date()
    };

    firestore.collection("posts").add(post);
    handleClose();
  };

  const handleChanges = e => {
    switch (e.target.name) {
      case "street":
        setStreet(e.target.value);
        break;
      case "prisonName":
        setPrisonName(e.target.value);
        break;
      case "pState":
        setPState(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "zip":
        setZip(e.target.value);
        break;
      case "contactName":
        setContactName(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "contactEmail":
        setContactEmail(e.target.value);
        break;
    }
  };

  return (
    <div>
      <div className="prison-form-wrapper">
        <div className="prison-fab-wrapper">
          <Fab
            id="prison-fab-button"
            color="primary"
            aria-label="Add"
            className={`${classes.fab} prison-fab-button`}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <h2 className="prison-fab-h2">Register Your Prison</h2>
        </div>
      </div>
      <Dialog
        open={opens}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">
            General Prisoner Info
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Name Of Worker"
              name="prisonName"
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Age"
              name="prisonerName"
              onChange={handleChanges}
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Gender
              </InputLabel>
              <Select
                // open={open}
                onClose={handleClose}
                onOpen={handleClickOpen}
                value={age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "demo-controlled-open-select"
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Permissions</InputLabel>
              <Select
                class="permissions"
                value={per}
                onClose={handleClose}
                onOpen={handleClickOpen}
                onChange={handlePChange}
                inputProps={{
                  name: "per",
                  id: "demo-controlled-open-select"
                }}
              >
                <MenuItem value="work">Work</MenuItem>
                <MenuItem value="permission">Permission</MenuItem>
              </Select>
            </FormControl>

            <DialogTitle id="form-dialog-title">Skills</DialogTitle>

            <TextField
              label="Summary(Cover Letter)"
              multiline
              rows="6"
              defaultValue="Default Value"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />

            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>
            {/******************************************************************** First Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            {/******************************************************************** Second Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            {/******************************************************************** Third Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            {/******************************************************************** Fourth Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onSubmit={handleSubmit} type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(PrisonDialogForm);
