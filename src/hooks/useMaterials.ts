import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setMaterials, setCategories } from "@/store/materials";
import { toast } from "sonner";
import {
  fetchMaterials,
  fetchMaterialCategories,
} from "@/api/requests/materials";

interface Args {
  fetch?: boolean;
}

export const useMaterials = ({ fetch }: Args) => {
  const dispatch = useAppDispatch();
  const materials = useAppSelector((state) => state.materials.data);
  const categories = useAppSelector((state) => state.materials.categories);

  useEffect(() => {
    if (fetch && !materials.length) {
      fetchMaterials()
        .then((materials) => dispatch(setMaterials(materials)))
        .catch((e) => toast.error("Failed to fetch materials. " + e));

      fetchMaterialCategories()
        .then((categories) => dispatch(setCategories(categories)))
        .catch((e) => toast.error("Failed to fetch material categories. " + e));
    }
  }, [fetch, materials.length, dispatch]);

  return { materials, categories };
};
