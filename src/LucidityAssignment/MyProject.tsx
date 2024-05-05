import React, { useState } from "react";
import { CommonSwitch } from "./Comps/CommonSwitch";
import { HStack,Text, } from "@chakra-ui/react";
import { PageLayoutWrapper } from "./Comps/PageLayoutWrapper";
import { ScreenView } from "./MyCard/Utils/Constants";
import { UserDataPage } from "./Pages/UserDataPage";
import { AdminDataPage } from "./Pages/AdminDataPage";


export const MyProject = () => {
  const [viewType, setViewType] = useState(ScreenView.ADMIN);
  const isSwitchChecked = viewType === ScreenView.USER; // considering initial state admin view, hence checked would be user-view
  return (
    <PageLayoutWrapper>
      <HStack justifyContent={"flex-end"}>
        <Text color={"gray"}>{ScreenView.ADMIN} </Text>
        <CommonSwitch
          isChecked={isSwitchChecked}
          onChange={(event) => {
            const updatedViewType = !!event.target.checked // if true, then viewType would be , USER otherwise admin
              ? ScreenView.USER
              : ScreenView.ADMIN;
            setViewType((prevVal) => {
              return updatedViewType;
            });
          }}
          colorScheme={"green"}
        />
        <Text color={"gray"}>{ScreenView.USER} </Text>
      </HStack>

      <Text style={{ fontSize: "xx-large", color: "white" }}>
        Inventory stats
      </Text>

      {
        isSwitchChecked ? <UserDataPage/> :<AdminDataPage/>
      }
      
    </PageLayoutWrapper>
  );
};
