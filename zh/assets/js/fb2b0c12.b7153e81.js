(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[92012],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40387:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"\u6269\u5c55\u4e91\u8d44\u6e90"},c={unversionedId:"platform-engineers/components/component-terraform",id:"platform-engineers/components/component-terraform",isDocsHomePage:!1,title:"\u6269\u5c55\u4e91\u8d44\u6e90",description:"\u5bf9\u4e91\u8d44\u6e90\u7684\u96c6\u6210\u9700\u6c42\u5f80\u5f80\u662f\u6700\u9891\u7e41\u51fa\u73b0\uff0c\u6bd4\u5982\u4f60\u53ef\u80fd\u5e0c\u671b\u6570\u636e\u5e93\u3001\u4e2d\u95f4\u4ef6\u7b49\u670d\u52a1\u4f7f\u7528\u963f\u91cc\u4e91\u3001AWS \u7b49\u4e91\u5382\u5546\u7684\uff0c\u4ee5\u83b7\u5f97\u751f\u4ea7\u7ea7\u522b\u7684\u53ef\u7528\u6027\u5e76\u514d\u53bb\u8fd0\u7ef4\u7684\u9ebb\u70e6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/components/component-terraform.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/component-terraform",permalink:"/zh/docs/next/platform-engineers/components/component-terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/components/component-terraform.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1643273723,formattedLastUpdatedAt:"2022/1/27",frontMatter:{title:"\u6269\u5c55\u4e91\u8d44\u6e90"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8",permalink:"/zh/docs/next/platform-engineers/components/custom-component"},next:{title:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81",permalink:"/zh/docs/next/platform-engineers/traits/customize-trait"}},l=[{value:"\u5f00\u53d1 Terraform \u8d44\u6e90\u6216\u6a21\u5757",id:"\u5f00\u53d1-terraform-\u8d44\u6e90\u6216\u6a21\u5757",children:[]},{value:"\u751f\u6210 ComponentDefinition",id:"\u751f\u6210-componentdefinition",children:[]},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]},{value:"\u751f\u6210\u6587\u6863",id:"\u751f\u6210\u6587\u6863",children:[]}],p={toc:l};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u4e91\u8d44\u6e90\u7684\u96c6\u6210\u9700\u6c42\u5f80\u5f80\u662f\u6700\u9891\u7e41\u51fa\u73b0\uff0c\u6bd4\u5982\u4f60\u53ef\u80fd\u5e0c\u671b\u6570\u636e\u5e93\u3001\u4e2d\u95f4\u4ef6\u7b49\u670d\u52a1\u4f7f\u7528\u963f\u91cc\u4e91\u3001AWS \u7b49\u4e91\u5382\u5546\u7684\uff0c\u4ee5\u83b7\u5f97\u751f\u4ea7\u7ea7\u522b\u7684\u53ef\u7528\u6027\u5e76\u514d\u53bb\u8fd0\u7ef4\u7684\u9ebb\u70e6\u3002\nTerraform \u662f\u76ee\u524d\u4e1a\u5185\u652f\u6301\u4e91\u8d44\u6e90\u6700\u5e7f\u6cdb\u4e5f\u6700\u53d7\u6b22\u8fce\u7684\u7ec4\u4ef6\uff0cKubeVela \u5bf9 Terraform \u8fdb\u884c\u4e86\u989d\u5916\u7684\u652f\u6301\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Kubernetes CRD \u7684\u65b9\u5f0f\u914d\u5408\nTerraform \u4f7f\u7528\u4efb\u610f\u7684\u4e91\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u6700\u7ec8\u7528\u6237\u80fd\u591f",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u90e8\u7f72\u548c\u6d88\u8d39\u4e91\u8d44\u6e90"),"\uff0c\u5f53\u7528\u6237\u7684\u8981\u6c42\u8d85\u51fa\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u5185\u7f6e\u4e91\u8d44\u6e90\u7684\u80fd\u529b"),"\uff0c\n\u7ba1\u7406\u5458\u9700\u8981\u8981\u4e3a\u4e91\u8d44\u6e90\u51c6\u5907 ComponentDefinitions\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e3a\u4e91\u4f9b\u5e94\u5546\u963f\u91cc\u4e91\u3001AWS \u548c Azure \u521b\u5efa Terraform \u7c7b\u578b\u7684\u4e91\u8d44\u6e90 ComponentDefinitions \u7684\u6307\u5357\u3002"),(0,a.kt)("h1",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/next/install"},(0,a.kt)("inlineCode",{parentName:"a"},"vela")," \u547d\u4ee4\u884c"))),(0,a.kt)("h2",{id:"\u5f00\u53d1-terraform-\u8d44\u6e90\u6216\u6a21\u5757"},"\u5f00\u53d1 Terraform \u8d44\u6e90\u6216\u6a21\u5757"),(0,a.kt)("p",null,"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1\u521b\u5efa Terraform \u8d44\u6e90\u6216\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u4e3a AWS S3 bucket \u5f00\u53d1\u4e86 Terraform \u8d44\u6e90\uff0c\u5e76\u5199\u5165\u672c\u5730\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_s3_bucket.tf")," \u91cc\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terraform"},'resource "aws_s3_bucket" "bucket-acl" {\n  bucket = var.bucket\n  acl = var.acl\n}\n\noutput "BUCKET_NAME" {\n  value = aws_s3_bucket.bucket-acl.bucket_domain_name\n}\n\nvariable "bucket" {\n  description = "S3 bucket name"\n  default = "vela-website"\n  type = string\n}\n\nvariable "acl" {\n  description = "S3 bucket ACL"\n  default = "private"\n  type = string\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u7ed9\u963f\u91cc\u4e91 EIP \u5f00\u53d1\u4e86 Terraform \u6a21\u677f\uff0c\u5e76\u5b58\u50a8\u5728 GitHub \u5e93 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-alibaba-eip.git%E3%80%82"},"https://github.com/oam-dev/terraform-alibaba-eip.git\u3002")),(0,a.kt)("h2",{id:"\u751f\u6210-componentdefinition"},"\u751f\u6210 ComponentDefinition"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"vela def init")," \u547d\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u57fa\u4e8e Terraform \u8d44\u6e90\u6216\u6a21\u5757\u7684\u4e91\u8d44\u6e90\u751f\u6210\u4e00\u4e2a ComponentDefinition\uff0cTerraform \u8d44\u6e90\u6216\u6a21\u677f\u53ef\u4ee5\u6765\u81ea\u672c\u5730\u6587\u4ef6\uff0c\n\u4e5f\u53ef\u4ee5\u6765\u81ea\u8fdc\u7a0b GitHub \u4ed3\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$vela def init -h\n\n      --git string             Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set.\n      --local string           Specify the local path of the configuration(HCL) file. Valid when --provider/-p is set.\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--local")," \u6765\u63a5\u53d7\u6765\u81ea\u672c\u5730\u6587\u4ef6\u7684 Terraform \u8d44\u6e90\u6216\u6a21\u5757\u6765\u751f\u6210 ComponentDefinition\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$vela def init s3 --type component --provider aws --desc "Terraform configuration for AWS S3" --local aws_s3_bucket.tf\n\napiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: Terraform configuration for AWS S3\n  creationTimestamp: null\n  labels:\n    type: terraform\n  name: aws-s3\n  namespace: vela-system\nspec:\n  schematic:\n    terraform:\n      configuration: |\n        resource "aws_s3_bucket" "bucket-acl" {\n          bucket = var.bucket\n          acl = var.acl\n        }\n\n        output "BUCKET_NAME" {\n          value = aws_s3_bucket.bucket-acl.bucket_domain_name\n        }\n\n        variable "bucket" {\n          description = "S3 bucket name"\n          default = "vela-website"\n          type = string\n        }\n\n        variable "acl" {\n          description = "S3 bucket ACL"\n          default = "private"\n          type = string\n        }\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\nstatus: {}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--git")," \u6765\u63a5\u53d7\u6765\u81ea\u8fdc\u7a0b GitHub \u4ed3\u5e93\u7684 Terraform \u6a21\u5757\u6216\u8d44\u6e90\u6765\u751f\u6210 ComponentDefinition\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ vela def init eip --type component --provider alibaba --desc "Terraform configuration for Alibaba Cloud Elastic IP" --git https://github.com/oam-dev/terraform-alibaba-eip.git\n\napiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud Elastic\n      IP\n  creationTimestamp: null\n  labels:\n    type: terraform\n  name: alibaba-eip\n  namespace: vela-system\nspec:\n  schematic:\n    terraform:\n      configuration: https://github.com/oam-dev/terraform-alibaba-eip.git\n      type: remote\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\nstatus: {}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u70ed\u70c8\u6b22\u8fce\u4f60\u5c06\u6269\u5c55\u7684\u4e91\u8d44\u6e90\u7684 ComponentDefinition \u8d21\u732e\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons/"},"oam-dev/catalog"),"\u3002"),(0,a.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"vela show")," \u547d\u4ee4\u5feb\u901f\u9a8c\u8bc1 ComponentDefinition\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela show alibaba-eip\n# Properties\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n|            NAME            |                                       DESCRIPTION                                        |                           TYPE                            | REQUIRED | DEFAULT |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n| name                       | Name to be used on all resources as prefix. Default to 'TF-Module-EIP'.                  | string                                                    | true     |         |\n| bandwidth                  | Maximum bandwidth to the elastic public network, measured in Mbps (Mega bit per second). | number                                                    | true     |         |\n| writeConnectionSecretToRef | The secret which the cloud resource connection will be written to                        | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false    |         |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n\n\n## writeConnectionSecretToRef\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                                 DESCRIPTION                                 |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n| name      | The secret name which the cloud resource connection will be written to      | string | true     |         |\n| namespace | The secret namespace which the cloud resource connection will be written to | string | false    |         |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n")),(0,a.kt)("p",null,"\u5982\u679c\u8868\u683c\u80fd\u6b63\u5e38\u51fa\u6765\uff0cComponentDefinition \u5e94\u8be5\u5c31\u53ef\u4ee5\u5de5\u4f5c\u4e86\u3002\u66f4\u8fdb\u4e00\u6b65\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u90e8\u7f72\u4e91\u8d44\u6e90"),"\u521b\u5efa\u4e00\u4e2a\u5b9e\u9645\u7684 EIP \u6765\u9a8c\u8bc1\u3002"),(0,a.kt)("h2",{id:"\u751f\u6210\u6587\u6863"},"\u751f\u6210\u6587\u6863"),(0,a.kt)("p",null,"\u6211\u4eec\u9f13\u52b1\u4f60\u4e3a\u4f60\u7684 ComponentDefinition \u751f\u6210\u6587\u6863\u5e76\u63d0\u4ea4\u7ed9 ","[KubeVela\u5b98\u65b9\u7f51\u7ad9]","\uff08",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io%EF%BC%89%E3%80%82"},"https://github.com/oam-dev/kubevela.io\uff09\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def doc-gen alibaba-eip -n vela-system\nGenerated docs for alibaba-eip in ./kubevela.io/docs/end-user/components/cloud-services/terraform/alibaba-eip.md\n")),(0,a.kt)("p",null,"\u5c06\u751f\u6210\u7684\u6587\u4ef6\u79fb\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io"},"oam-dev/kubevela.io")," \u5e93\u3002\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io#contributing-to-kubevela-en-docs"},"\u8d21\u732e\u6307\u5357")," \u6765\u63d0\u4ea4\u6587\u6863\u3002"))}s.isMDXComponent=!0}}]);