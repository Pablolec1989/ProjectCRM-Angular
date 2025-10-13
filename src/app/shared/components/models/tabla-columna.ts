export class TablaColumna {
  key: string;
  header: string;

  //Definir constructor con parametros opcionales con valores predefinidos
  constructor(key?: string, header?: string) {
    this.key = key ?? 'nombre';
    this.header = header ?? 'Nombre';
  }

  static default(): TablaColumna[] {
    return [
      new TablaColumna('nombre', 'Nombre')
    ];
  }
}