"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LinkStore } from "@/store/LinkItems";
import { useState } from "react";

export const Links = () => {
  const [user, setUser] = useState<string>();
  const [socialMedia, setSocialMedia] = useState<string>();
  const [addItem, removeItem, items] = LinkStore((state) => [
    state.addItem,
    state.removeItem,
    state.items,
  ]);

  var data = { user: user, socialMedia: socialMedia };

  return (
    <form className="flex gap-1">
      <Select onValueChange={(e) => setSocialMedia(e)}>
        <SelectTrigger className="w-[100px] text-sm">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="discord">Discord</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="text" onChange={(e) => setUser(e.target.value)} />
      <Button variant={"outline"} onClick={() => addItem(data)}>
        +
      </Button>
      {items.map((i) => (
        <Button key={i.id} variant={"outline"} onClick={() => removeItem(i.id)}>
          -
        </Button>
      ))}
      {items.map((i) => {
        return (
          <>
            <ul>
              <li>{i.socialMedia}</li>
              <li>{i.user}</li>
            </ul>
          </>
        );
      })}
    </form>
  );
};
