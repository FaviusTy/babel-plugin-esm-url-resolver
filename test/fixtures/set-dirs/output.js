import * as source1 from "./module1.js";
import * as source2 from "../module2.js";
import { source3 } from "./module3.js";
import { source4 } from "/module4";
import def, { sub1, sub2 } from "./module5/index.js";
import lib from "lib";
import { Component, render } from "https://cdn.pika.dev/preact/v8";
import lib1 from "/src/lib.js";
import lib2 from "/src/node/lib2.js";
import lib3 from "src/node/lib3"; // that's not transform!

import src from "/srcYakisoba"; // that's not transform!

const lazyLib = import("/src/lib.js");
