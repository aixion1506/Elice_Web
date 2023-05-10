import React from "react";
import { Link } from "react-router-dom";
import {
  MyDetailsWrapper,
  DetailFormWrapper,
  TitleWrapper,
  GotoSignout,
} from "./mydetails-styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../../components/common-styled";

const MyDetails = () => {
  return (
    <LayoutWrapper>
      <MyDetailsWrapper>
        <TitleWrapper>
          <h1>MY DETAILS</h1>
        </TitleWrapper>
        <DetailFormWrapper>
          <InputWrapper>
            <label>NAME</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>ADDRESS1</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>ADDRESS2</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>ZIP CODE</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>CITY</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>PHONE</label>
            <input type="tel" required />
          </InputWrapper>

          <Button>APPLY</Button>
          <GotoSignout>
            <Link to="/">DELETE ACCOUNT</Link>
          </GotoSignout>
        </DetailFormWrapper>
      </MyDetailsWrapper>
    </LayoutWrapper>
  );
};

export default MyDetails;
