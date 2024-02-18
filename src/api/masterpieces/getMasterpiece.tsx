import { notFound } from "next/navigation";
import { Masterpiece } from "../../types/masterpiece";
import { masterpieces } from "./mockedMasterpieces";

import "server-only";

export async function getMasterpiece(id: string): Promise<Masterpiece> {
  return (
    masterpieces.find((masterpiece) => String(masterpiece.id) === id) ||
    notFound()
  );
}

export async function getMasterpieces(): Promise<Masterpiece[]> {
  return masterpieces;
}
