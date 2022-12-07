/* eslint-disable @typescript-eslint/ban-types */

/** Класс для работы с localStorage. */
export class UserStorage {
  /**
   * Установить запись в localStorage.
   * @param {string} key - Ключ записи.
   * @param {string} value - Значение записи.
   */
  static set(key: string, value: string | {}): void {
    if (value instanceof Object) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  /**
   * Получить запись из localStorage.
   * @param {string} key - Ключ записи.
   * @return {string|null} Возвращает строку или Null
   */
  static get<T extends string | {}>(key: string): T | null {
    let parsed;

    try {
      parsed = JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      parsed = localStorage.getItem(key);
    }

    return parsed as T | null;
  }

  /**
   * Удалить запись из localStorage.
   * @param {string} key - Ключ записи.
   */
  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
