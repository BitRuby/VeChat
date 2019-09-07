import React, { Component } from "react";
import Logo from "../../components/signup/logo/Logo";
import Settings from "../../components/signup/settings/Settings";
import Categories from "../../components/signup/categories/Categories";
import { Redirect } from "react-router-dom";

import Modal from "../../components/ui/modal/Modal";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import styles from "./Signup.module.css";
import avatar1 from "../../assets/images/icons/avatar1.png";
import avatar2 from "../../assets/images/icons/avatar2.png";
import avatar3 from "../../assets/images/icons/avatar3.png";
import avatar4 from "../../assets/images/icons/avatar4.png";
import avatar5 from "../../assets/images/icons/avatar5.png";
export class Signup extends Component {
  state = {
    modalShow: false,
    avatar: avatar1,
    username: "",
    valid: false,
    step: 1,
    category: "Cars",
    submitted: false
  };
  avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  showModalHandler = () => {
    this.setState({ modalShow: true });
  };

  setAvatarHandler = element => {
    this.setState({ modalShow: false, avatar: element });
    this.props.onAvatarSet(element);
  };

  setUsernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.state.username.length >= 6) {
      this.setState({ step: 2, valid: false });
      this.props.onUsernameSet(this.state.username);
      this.props.onAvatarSet(this.state.avatar);
    } else this.setState({ valid: true });
  };

  backHandler = event => {
    event.preventDefault();
    this.setState({ step: 1 });
  };

  selectHandler = event => {
    this.setState({ category: event.target.value });
    this.props.onCategorySet(event.target.value);
  };

  searchHandler = event => {
    event.preventDefault();
    if (this.state.username.length >= 6 && this.state.category !== "") {
      this.props.onCategorySet(this.state.category);
      this.props.onAuthSet(true);
      this.setState({ submitted: true });
    }
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/t/1" />;
    }
    return (
      <div className={styles.background}>
        {redirect}
        <div className={styles.gradient}>
          <div className={styles.container}>
            <Logo />
            {this.state.step === 1 ? (
              <Settings
                modalHandler={this.showModalHandler}
                avatars={this.state.avatar}
                usernameHandler={this.setUsernameHandler}
                submitHandler={this.submitHandler}
                username={this.state.username}
              />
            ) : (
              <Categories
                backHandler={this.backHandler}
                selectChange={this.selectHandler}
                selectedCategory={this.state.category}
                searchHandler={this.searchHandler}
              />
            )}

            {this.state.valid ? (
              <p className={styles.alert}>
                Username must contain at least 6 characters.
              </p>
            ) : null}
            <Modal show={this.state.modalShow}>
              <h2 className={styles.subtitle}>Select your avatar</h2>
              <div className={styles.modalContainer}>
                {this.avatars.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.avatarContainer}
                      onClick={() => this.setAvatarHandler(element)}
                    >
                      <img src={element} className={styles.imgAvatar} alt="" />
                    </div>
                  );
                })}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAvatarSet: avatar =>
      dispatch({ type: actions.SETAVATAR, avatar: avatar }),
    onUsernameSet: username =>
      dispatch({ type: actions.SETUSERNAME, username: username }),
    onCategorySet: category =>
      dispatch({ type: actions.SETCATEGORY, category: category }),
    onAuthSet: authenticated =>
      dispatch({ type: actions.SETAUTH, authenticated: authenticated })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
