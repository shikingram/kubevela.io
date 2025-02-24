---
title:  Gcp-Infrastructure
---

## 描述

Create DC/OS related GCP Infrastructure

## 参数说明


### 属性

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 master_public_ssh_key_path | Master node Public SSH Key |  | false |  
 master_cidr_range | Master CIDR Range |  | false |  
 bootstrap_disk_size | Bootstrap node disk size (gb) |  | false |  
 public_agent_ssh_user | Public Agent node SSH User |  | false |  
 infra_disk_size | Global Infra Disk Size |  | false |  
 infra_dcos_instance_os | Global Infra Tested OSes Image |  | false |  
 tags | Add custom tags to all resources | list | false |  
 name_prefix | Name Prefix |  | false |  
 accepted_internal_networks | Subnet ranges for all internal networks | list | false |  
 private_agent_machine_type | Private agent node machine type |  | false |  
 bootstrap_public_ssh_key_path | Bootstrap Node Public SSH Key |  | false |  
 public_agent_machine_type | Public agent machine type |  | false |  
 bootstrap_ssh_user | Bootstrap node SSH User |  | false |  
 private_agent_ssh_user | Private Agent node SSH User |  | false |  
 num_bootstrap | Specify the amount of bootstrap. You should have at most 1 |  | false |  
 forwarding_rule_disable_masters | Do not create fowarding rules for masters (admin access + internal access) |  | false |  
 private_agent_disk_type | Private agent node disk type. |  | false |  
 public_agent_disk_size | Public agent disk size (gb) |  | false |  
 infra_disk_type | Global Infra Disk Type |  | false |  
 bootstrap_dcos_instance_os | Bootstrap node tested OSes image |  | false |  
 labels | Add custom labels to all resources | map | false |  
 bootstrap_disk_type | Bootstrap node disk type. |  | false |  
 public_agent_image | Public agent node OS image |  | false |  
 master_disk_size | Master node disk size (gb) |  | false |  
 master_disk_type | Master node disk type. |  | false |  
 private_agent_disk_size | Private agent node disk size (gb) |  | false |  
 private_agent_public_ssh_key_path | Private Agent node Public SSH Key |  | false |  
 infra_public_ssh_key_path | Global Infra Public SSH Key |  | true |  
 master_dcos_instance_os | Master node tested OSes image |  | false |  
 cluster_name | Name of the DC/OS cluster |  | true |  
 agent_cidr_range | Agent CIDR Range |  | false |  
 public_agents_additional_ports | List of additional ports allowed for public access on public agents (80 and 443 open by default) | list | false |  
 master_image | Master node OS image |  | false |  
 public_agent_public_ssh_key_path | Public Agent node Public SSH Key |  | false |  
 infra_machine_type | Global Infra Machine Type |  | false |  
 admin_ips | List of CIDR admin IPs | list | true |  
 num_masters | Specify the amount of masters. For redundancy you should have at least 3 |  | false |  
 num_private_agents | Specify the amount of private agents. These agents will provide your main resources |  | false |  
 bootstrap_machine_type | [BOOTSTRAP] Machine type |  | false |  
 master_machine_type | Master node machine type |  | false |  
 forwarding_rule_disable_public_agents | Do not create forwarding rules for public agents. ( Needs to be true when num_public_agents is 0 ) |  | false |  
 public_agent_disk_type | Public agent node disk type. |  | false |  
 master_ssh_user | Master node SSH User |  | false |  
 private_agent_dcos_instance_os | Private agent node tested OSes image |  | false |  
 bootstrap_image | [BOOTSTRAP] Image to be used |  | false |  
 private_agent_image | Private agent node OS image |  | false |  
 num_public_agents | Specify the amount of public agents. These agents will host marathon-lb and edgelb |  | false |  
 infra_ssh_user | Global Infra SSH User |  | false |  
 public_agent_dcos_instance_os | Public Agent node tested OSes image |  | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
