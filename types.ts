
export interface Zikr {
  id: number;
  arabic_text: string;
  translation: string;
  virtue: string;
  count: number;
}

export interface AzkarCategory {
  id: number;
  title: string;
  description: string;
  azkar: Zikr[];
}
