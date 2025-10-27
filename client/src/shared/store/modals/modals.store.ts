import { queryClient } from "@/shared/api/query-client";

export class ModalStore {
  static baseKey = "modals";

  static {
    queryClient.setQueryDefaults([ModalStore.baseKey], {
      queryFn: (): null => null,
      enabled: false,
      gcTime: Infinity,
      initialData: [],
    });
  }
}
