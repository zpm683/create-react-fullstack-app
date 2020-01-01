import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import ButtonWithRedux from "./ButtonWithRedux";
import ButtonWithSaga from "./ButtonWithSaga";
import LinkWithRouter from "./LinkWithRouter";
import Editer from "../../../common/components/Editer";
import TypographyWithI18n from "./TypographyWithI18n";
import { IExampleStoreState } from "../redux/reducers";
import { IExampleActions } from "../redux/actions";
import { getRandomNumber } from "../../../common/utils"


interface IOwnProps {}
type ExampleProps = IOwnProps & IExampleActions & IExampleStoreState;

export default function Example(props: ExampleProps) {

  //!!best way is used redux to wetch the inputData
  const [inputData, changeInputData] = useState("");

  function toChangeTitle() {
    props.changeButtonTitle(`${getRandomNumber()}`);
  }

  function toCallSagaApi() {
    props.doPostDataWithSaga({ data: inputData });
  }

  return (
    <Container>
      <br/>
      <TypographyWithI18n />
      <br/>
      <Divider />
      <br/>
      <ButtonWithRedux onClick={toChangeTitle} title={props.titleString} />
      <br/><br/>
      <Divider />
      <br/>
      <ButtonWithSaga
        onClick={toCallSagaApi}
        data={inputData}
        onChange={(e: any) => {
          changeInputData(e.target.value);
        }}
      />
      <br/>
      <Divider />
      <br/>
      <LinkWithRouter />
      <br/>
      <br/>
      <Editer/>
    </Container>
  );
}
