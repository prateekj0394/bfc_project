use Rack::ContentLength
app = Rack::Directory.new Dir.pwd
#app = 'C:/Users/zhirzh/Documents/GitHub/bfc_project/'
run app