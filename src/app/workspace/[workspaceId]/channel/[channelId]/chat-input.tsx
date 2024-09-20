import { useRef, useState } from "react";
import dynamic from "next/dynamic";

import Quill from "quill";
import { toast } from "sonner";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useChannelId } from "@/hooks/use-channel-id";

import { useCreateMessage } from "@/features/messages/api/use-create-message";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

interface ChatInputProps {
  placeholder: string;
}

export const ChatInput = ({ placeholder }: ChatInputProps) => {
  const [editorKey, setEditorKey] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const editorRef = useRef<Quill | null>(null);

  const workspaceId = useWorkspaceId();
  const channelId = useChannelId();

  const { mutate: createMessage } = useCreateMessage();

  const handleSubmit = async ({
    body,
    image,
  }: {
    body: string;
    image: File | null;
  }) => {
    try {
      setIsPending(true);

      await createMessage(
        { workspaceId, channelId, body },
        { throwError: true }
      );
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsPending(false);
    }

    setEditorKey((prevKey) => prevKey + 1);
    // editorRef?.current?.setContents([]);
  };

  return (
    <div className="px-5 w-full">
      <Editor
        key={editorKey}
        placeholder={placeholder}
        onSubmit={handleSubmit}
        disabled={isPending}
        innerRef={editorRef}
      />
    </div>
  );
};
