import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = () => {
  return (
    <div className="text-editor">
      <MDEditor.Markdown source={'# Header'} />
    </div>
  );
};

export default TextEditor;
