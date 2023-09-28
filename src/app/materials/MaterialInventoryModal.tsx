import List from "@mui/joy/List";
import { Material, MaterialInventory } from "@/api/types/materials";
import { Stack, Modal, ModalDialog, Typography } from "@mui/joy";
import { MaterialInventoryForm } from "./MaterialInventoryForm";

interface Props {
  isOpen: boolean;
  close: () => void;
  material: Material;
  materialInventory?: MaterialInventory;
}

export const MaterialInventoryModal = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.close}>
      <ModalDialog layout="center" variant="outlined" size="lg">
        <List
          sx={{
            overflow: "scroll",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          <Stack spacing={2} className="px-3">
            <Typography level="h3" className="">
              {!!props.materialInventory
                ? "Editar unidade em estoque"
                : "Adicionar ao estoque"}
            </Typography>
            <Typography level="body-md">
              <strong>{props.material.name}</strong>
            </Typography>
            <MaterialInventoryForm
              material={props.material}
              materialInventory={props.materialInventory}
              onSubmit={props.close}
            />
          </Stack>
        </List>
      </ModalDialog>
    </Modal>
  );
};
