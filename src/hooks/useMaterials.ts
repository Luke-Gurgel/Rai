import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setMaterials, setCategories } from "@/store/materials";
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
        .catch((e) => console.log(e));

      fetchMaterialCategories()
        .then((categories) => dispatch(setCategories(categories)))
        .catch((e) => console.log(e));
    }
  }, [fetch, materials.length, dispatch]);

  return { materials, categories };
};
