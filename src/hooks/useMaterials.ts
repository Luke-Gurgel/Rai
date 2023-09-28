import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { materialStore } from "@/store/materials";
import { materialAPI } from "@/api/requests/materials";
import { toast } from "sonner";

export const useMaterials = () => {
  const dispatch = useAppDispatch();
  const { data, categories, filters } = useAppSelector(
    (state) => state.materials
  );

  useEffect(() => {
    if (!data.length) {
      materialAPI
        .fetchMaterials()
        .then((materials) => dispatch(materialStore.setMaterials(materials)))
        .catch((e) =>
          toast.error("Não foi possível buscar os materiais. " + e)
        );

      materialAPI
        .fetchMaterialCategories()
        .then((categories) => dispatch(materialStore.setCategories(categories)))
        .catch((e) =>
          toast.error(
            "Não foi possível buscar as categorias dos materiais. " + e
          )
        );
    }
  }, [data.length, dispatch]);

  return { materials: data, categories, filters };
};
