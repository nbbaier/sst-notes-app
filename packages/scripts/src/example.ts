import { Resource } from "sst";
import { Example } from "@sst-notes-app/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
