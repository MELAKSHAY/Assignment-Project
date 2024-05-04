import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CommonCardProps extends CardProps {
  bodyContent: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}
export const CommonCard = ({
  bodyContent,
  footerContent,
  headerContent,
  ...restCardProps
}: CommonCardProps) => {
  return (
    <Card {...restCardProps}>
       {headerContent && <CardHeader>{headerContent}</CardHeader>}
      <CardBody>{bodyContent}</CardBody>
      {footerContent &&<CardFooter>{footerContent}</CardFooter>}
    </Card>
  );
};
