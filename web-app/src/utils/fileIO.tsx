import { GraphicalModelType } from '../types/experiment';

export function downloadGraphicalModel(model: object, filename: string) {
  const json = JSON.stringify(model, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.json`;
  a.style.display = 'none';

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const handleFile = (
  file: File,
  resolve: (value: GraphicalModelType) => void,
  reject: (reason?: string) => void
) => {
  const reader = new FileReader();

  reader.onload = (event: ProgressEvent<FileReader>) => {
    // Access the file content here
    const content = event.target?.result;
    if (content) {
      try {
        const jsonObject = JSON.parse(content as string);
        resolve(jsonObject);
        // Process the JSON object as needed
      } catch (error) {
        reject('Error parsing JSON');
      }
    }
  };

  reader.readAsText(file);
};

const selectFile = (): Promise<GraphicalModelType> => {
  return new Promise((resolve, reject) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json'; // Specify the file types allowed to be selected

    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const selectedFile = target.files[0];
        handleFile(selectedFile, resolve, reject);
      }
    };

    fileInput.click();
  });
};

export const uploadGraphicalModel = async () => {
  try {
    const model = await selectFile();
    return model;
  } catch (error) {
    return null;
  }
};
