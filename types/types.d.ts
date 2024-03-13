type PartialRecord<K extends keyof string, T> = Partial<Record<K, T>>;

export type TLocales = 'en-US' | 'es-ES';
export type TTranslations = Record<string, string>;
export type TMessages = PartialRecord<TLocales, TTranslations>;
