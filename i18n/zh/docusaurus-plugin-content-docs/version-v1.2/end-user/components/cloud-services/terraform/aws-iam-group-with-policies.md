---
title:  AWS IAM-GROUP-WITH-POLICIES
---

## 描述

Terraform module which creates IAM resources on AWS

## 参数说明


### 属性

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 group_users | List of IAM users to have in an IAM group which can assume the role | list(string) | false |  
 custom_group_policy_arns | List of IAM policies ARNs to attach to IAM group | list(string) | false |  
 attach_iam_self_management_policy | Whether to attach IAM policy which allows IAM users to manage their credentials and MFA | bool | false |  
 tags | A map of tags to add to all resources. | map(string) | false |  
 create_group | Whether to create IAM group | bool | false |  
 name | Name of IAM group | string | false |  
 custom_group_policies | List of maps of inline IAM policies to attach to IAM group. Should have `name` and `policy` keys in each element. | list(map(string)) | false |  
 iam_self_management_policy_name_prefix | Name prefix for IAM policy to create with IAM self-management permissions | string | false |  
 aws_account_id | AWS account id to use inside IAM policies. If empty, current AWS account ID will be used. | string | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
