import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setMaterials, setCategories } from "@/store/materials";
import { toast } from "sonner";
import {
  fetchMaterials,
  fetchMaterialCategories,
} from "@/api/requests/materials";

export const useMaterials = () => {
  const dispatch = useAppDispatch();
  const { data, categories, filters } = useAppSelector(
    (state) => state.materials
  );

  useEffect(() => {
    if (!data.length) {
      fetchMaterials()
        .then((materials) => dispatch(setMaterials(materials)))
        .catch((e) => toast.error("Failed to fetch materials. " + e));

      fetchMaterialCategories()
        .then((categories) => dispatch(setCategories(categories)))
        .catch((e) => toast.error("Failed to fetch material categories. " + e));
    }
  }, [data.length, dispatch]);

  return { materials: data, categories, filters };
};
