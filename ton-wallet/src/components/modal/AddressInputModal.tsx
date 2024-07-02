import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAnimate } from "framer-motion";
import Modal from "@mui/material/Modal";
import { style } from "./style";
import { Input } from "@mui/material";

const AddressInputModal = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: (val: boolean) => void;
}) => {
  const [scope, animate] = useAnimate();

  const handleClose = async () => {
    await animate(scope.current, { top: "40%" }, { duration: 0.5 });
    await animate(scope.current, { top: "100%" }, { duration: 0.2 });
    setIsModal(false);
  };
  console.log(isModal);

  return (
    // <motion.div id="modal">
    <Modal
      open={isModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id="modal"
    >
      <Box sx={style} ref={scope}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography sx={{ mt: 2 }}>Set your Address</Typography>
        <Input
          type="text"
          sx={{
            border: "1px solid #333",
            borderRadius: "8px",
            width: "100%",
            padding: "5px 10px",
          }}
          onChange={() => {}}
        />
      </Box>
    </Modal>
    // </motion.div>
  );
};

export default AddressInputModal;
