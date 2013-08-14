#!/usr/bin/env ruby
require 'uri'
JSCover_all_path = 'C:\JSCover\JSCover-all.jar'
scripts_source = 'C:\Dev\Mainline\Project\Web\Scripts\app'
scripts_dest = 'C:\inetpub\wwwroot\Scripts\app'
jscover_server_uri = URI.parse('http://localhost:9001')
report_path = 'C:\JSCover\report'


#Should not need to change any lines below here
file_sys_mode = "java -Dfile.encoding=UTF-8 -jar #{JSCover_all_path} --hybrid-mode --jscover-server-uri=#{jscover_server_uri.to_s} -fs #{scripts_source} #{scripts_dest}"
server_mode = "java -Dfile.encoding=UTF-8 -jar #{JSCover_all_path} --hybrid-mode -ws --document-root=#{scripts_dest}\\original-src --report-dir=#{report_path} --port=#{jscover_server_uri.port} --include-unloaded-js"

system(file_sys_mode)
system(server_mode)