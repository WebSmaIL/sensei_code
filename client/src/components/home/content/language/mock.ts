import { IModule } from "./interfaces";

interface IMOCK {
  lang_name: string
  modules: IModule[]
}

export const MOCK: IMOCK = {
  lang_name: "python",
  modules: [
  {
    title: "1. Функция print()",
    description: "dadadadasdasd",
    lang_id: 1,
    tasks: [
      {
        complexity: 1,
        task_id: 1,
        title: "Print",
      },
      {
        complexity: 1,
        task_id: 2,
        title: "Print",
      },
    ],
  },
  {
    title: "2. Функция print()",
    description: "dsfkkskpofgpkfdpkogpkodfpkogopkpkosfkosapkof",
    lang_id: 1,
    tasks: [
      {
        complexity: 2,
        task_id: 3,
        title: "Print2",
      },
      {
        complexity: 1,
        task_id: 4,
        title: "Print2",
      },
    ],
  },
]};