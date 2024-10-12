# This file is part of HuskTowns, licensed under the Apache License 2.0.
#
#  Copyright (c) Minecraft Server Collective Promotion Organization
#  Copyright (c) contributors
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

import yaml
import argparse

def validate_yaml_format(file_path): 
    required_keys = {'name', 'icon', 'type', 'version', 'desc', 'link'} 

    try: 
        with open(file_path, 'r', encoding='utf-8') as file: 
            data = yaml.safe_load(file) 

            if isinstance(data, list): 
                for index, item in enumerate(data): 
                    if not isinstance(item, dict): 
                        print(f"第 {index + 1} 项不是一个字典。") 
                        return False 
                    missing_keys = required_keys - item.keys() 
                    if missing_keys: 
                        print(f"第 {index + 1} 项缺少键: {missing_keys}.") 
                        return False 
                return True 
            else: 
                print("根元素不是一个数组。") 
                return False 

    except yaml.YAMLError as e: 
        print(f"解析 YAML 文件时发生错误: {e}") 
        return False 
    except FileNotFoundError: 
        print(f"文件 {file_path} 未找到。") 
        return False 
    except Exception as e: 
        print(f"发生错误: {e}") 
        return False 

def main():
    parser = argparse.ArgumentParser(description='验证并合并 YAML 文件。')
    parser.add_argument('new_server_path', help='新服务器文件路径')
    parser.add_argument('combined_file_path', help='合并后的服务器列表文件路径')
    args = parser.parse_args()

    # 验证新服务器文件的格式
    if validate_yaml_format(args.new_server_path): 
        if validate_yaml_format(args.combined_file_path): 
            # 如果验证通过，进行合并操作 
            with open(args.combined_file_path, "a", encoding="utf-8") as combined_file: 
                with open(args.new_server_path, "r", encoding="utf-8") as file: 
                    content = file.read() 
                    combined_file.write("\n") 
                    combined_file.write(content) 
                    combined_file.write("\n") 
            if validate_yaml_format(args.combined_file_path): 
                print("合并完成！") 
            else: 
                print("合并失败：最终数据库格式不正确。") 
        else: 
            print("合并失败：数据库格式不正确。") 
    else: 
        print("合并失败：新数据格式不正确。")

if __name__ == "__main__":
    main()
