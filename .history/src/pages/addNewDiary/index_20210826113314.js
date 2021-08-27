import { instanceOf } from 'prop-types';
import React, { Component } from 'react';
import { Cookies, withCookies } from 'react-cookie';
import AddTag from '../AddTag';
import NewDay from '../NewDay';

class AddNewDiary extends Component {
  static propsTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      tag_list: [],
      clicked_sticker: 0,
      backgroundColor: '#fff',
      lineWidth: 3,
      today: new Date(),
      isAddTag: Boolean,
      tagData: [],
      diaryData: [],
    };
  }

  setTagState = (tag, sticker) => {
    const getTagSticker = [
      ...this.state.tagData,
      {
        tag_list: tag,
        clicked_sticker: sticker,
      },
    ];
    this.setState({
      data: getTagSticker,
    });
  };

  setDiaryState = (backgroundColor, lineColor, lineWidth) => {
    const getColorsLines = [
      ...this.state.diaryData,
      {
        backgroundColor: backgroundColor,
        lineColor: lineColor,
        lineWidth: lineWidth,
      },
    ];
  };
  render() {
    return (
      <div id="container">
        <h1>dd</h1>
        <NewDay onSubmit={this.setTagState} />
        <AddTag onSubmit={this.setDiaryState} />
      </div>
    );
  }
}
export default withCookies(AddNewDiary);
