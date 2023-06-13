export interface ITheme {
  description: string;
  lang_id: number;

  tasks: {
    title: string;
    complexity: number;
    task_id: number;
  }[];
}

export interface IModule extends ITheme {
  title: string;
}
