import {
  chakra,
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface CommonModalProps {
  isOpen: boolean;
  onClose: ModalProps["onClose"];
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  size?: ModalProps["size"];
  contentStyle?: ModalContentProps["style"];
  bodyStyle?: ModalBodyProps["style"];
  headerStyle?: ModalHeaderProps["style"];
  footerStyle?: ModalFooterProps["style"];
  showLoadingOverlay?: boolean;
  blockScrollOnMount?: boolean;
  showModalAtCenter?: boolean;
  withCloseButton?: boolean;
}


export const CommonModal = ({
  isOpen,
  onClose,
  header,
  body,
  footer,
  contentStyle = {},
  bodyStyle = {},
  headerStyle = {},
  footerStyle = {},
}: CommonModalProps) => {
  const containerProps: any = {
    style: {},
  };

  containerProps["style"] = {
    ...containerProps["style"],
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
    >

      <ModalContent
        containerProps={containerProps}
        paddingBottom={4}
        style={{
          // alignSelf: "center",
          ...contentStyle,
          
        }}

        background={'grey'}
      >
        <ModalCloseButton
            size={"sm"}
            style={{justifyContent:'flex-end'}}
            color={'#293829'}
          />
         {/* <ModalOverlay /> */}
        <ModalHeader style={{ ...headerStyle }}>{header}</ModalHeader>

          

        <ModalBody style={{ ...bodyStyle }}>{body}</ModalBody>
        <ModalFooter style={{ ...footerStyle }}>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
