export class TransformHelper {
  public static toLowercase({ value }: { value: string }): string {
    return value ? value.toLowerCase() : value;
  }

  public static trim({ value }: { value: string }): string {
    return value ? value.trim() : value;
  }
}
