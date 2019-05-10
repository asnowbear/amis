define('docs/renderers/Grid.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"grid\" href=\"#grid\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Grid</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;grid&quot;</code></td>\n<td>指定为 Grid 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>columns</td>\n<td><code>Array</code></td>\n<td></td>\n<td>列集合</td>\n</tr>\n<tr>\n<td>columns[x]</td>\n<td><a href=\"/docs/renderers/Types#Container\">Container</a></td>\n<td></td>\n<td>成员可以是其他渲染器</td>\n</tr>\n<tr>\n<td>columns[x].xs</td>\n<td><code>int</code></td>\n<td></td>\n<td>宽度占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].xsHidden</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否隐藏</td>\n</tr>\n<tr>\n<td>columns[x].xsOffset</td>\n<td><code>int</code></td>\n<td></td>\n<td>偏移量 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].xsPull</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠左的距离占比：1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].xsPush</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠右的距离占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].sm</td>\n<td><code>int</code></td>\n<td></td>\n<td>宽度占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].smHidden</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否隐藏</td>\n</tr>\n<tr>\n<td>columns[x].smOffset</td>\n<td><code>int</code></td>\n<td></td>\n<td>偏移量 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].smPull</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠左的距离占比：1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].smPush</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠右的距离占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].md</td>\n<td><code>int</code></td>\n<td></td>\n<td>宽度占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].mdHidden</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否隐藏</td>\n</tr>\n<tr>\n<td>columns[x].mdOffset</td>\n<td><code>int</code></td>\n<td></td>\n<td>偏移量 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].mdPull</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠左的距离占比：1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].mdPush</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠右的距离占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].lg</td>\n<td><code>int</code></td>\n<td></td>\n<td>宽度占比： 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].lgHidden</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否隐藏</td>\n</tr>\n<tr>\n<td>columns[x].lgOffset</td>\n<td><code>int</code></td>\n<td></td>\n<td>偏移量 1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].lgPull</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠左的距离占比：1 - 12</td>\n</tr>\n<tr>\n<td>columns[x].lgPush</td>\n<td><code>int</code></td>\n<td></td>\n<td>靠右的距离占比： 1 - 12</td>\n</tr>\n</tbody>\n</table>\n<p>更多使用说明，请参看 <a href=\"https://react-bootstrap.github.io/components.html#grid-props-col\">Grid Props</a></p>\n<div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"body\">[\n    {\n        \"type\": \"grid\",\n        \"className\": \"b-a bg-dark lter\",\n        \"columns\": [\n            {\n                \"type\": \"plain\",\n                \"text\": \"md: 3\",\n                \"md\": 3,\n                \"className\": \"b-r\"\n            },\n\n            {\n                \"type\": \"plain\",\n                \"text\": \"md: 9\",\n                \"md\": 9\n            }\n        ]\n    },\n\n    {\n        \"type\": \"grid\",\n        \"className\": \"b-a m-t bg-dark lter\",\n        \"columns\": [\n            {\n                \"type\": \"plain\",\n                \"text\": \"mdOffset: 3\",\n                \"mdOffset\": 3\n            }\n        ]\n    }\n]\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Grid",
          "fragment": "grid",
          "fullPath": "#grid",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
