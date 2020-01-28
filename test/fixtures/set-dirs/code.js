import * as source1 from "./module1";
import * as source2 from "../module2";
import { source3 } from "./module3.js";
import { source4 } from "/module4";
import def, { sub1, sub2 } from "./module5/index";
import lib from "lib";
import { Component, render } from "https://cdn.pika.dev/preact/v8";
import lib1 from "/src/lib";
import lib2 from "/src/node/lib2";
import lib3 from "src/node/lib3"; // that's not transform!

import src from "/srcYakisoba"; // that's not transform!

const lazyLib = import("/src/lib");
