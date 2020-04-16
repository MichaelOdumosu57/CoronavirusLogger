require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'
require 'selenium/webdriver'
load 'custom_exports.rb'




# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  include Capybara
  include Capybara::DSL
  include Capybara::Selenium
  # monkey patch to avoid reset sessions
  class Capybara::Selenium::Driver < Capybara::Driver::Base
    def reset!
      if @browser
        @browser.navigate.to('about:blank')
      end
    end
  end
  
  config = Hash.new 
  config[:user] = ENV['LT_USERNAME']  
  config[:key] = ENV['LT_APIKEY'] 
  
  
   
  b = Capybara.register_driver :lambdatest do |app|
    # p app
    caps = {                       
      :browserName => "chrome",         
      :version => "76.0",         
      :platform =>  "win10",
      :name =>  "RSpec Sample Test",
      :build =>  "RSpec Selenium Sample",      
      :network =>  true,
      :visual =>  true,
      :video =>  true,
      :console =>  true,
      :tunnel =>true,
      :resolution => "1280x1024"
    } 
  
    a =Capybara::Selenium::Driver.new(
    app,
    :browser => :remote,
    :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
    :desired_capabilities => caps
    )
    # puts a.class
    # puts a.options
    #  a.for(:remote,
    # :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
    # :desired_capabilities => caps)
  end
  puts b
  

 

  # Capybara.default_driver = :lambdatest 
  Capybara.run_server = false  
  Capybara.default_driver = :selenium 
  # Capybara.default_driver = :chrome 
  # Capybara.javascript_driver = :chrome 
  # Capybara.current_driver = :chrome
  Capybara.app_host = 'https://watermine.firebaseapp.com'
  # Capybara.app_host = "https://www.sortforyou.com"
  # Capybara.app_host = "https://localhost:4200"
  puts Capybara::Selenium


  # Capybara.configure do |config|
  #   config.default_max_wait_time = 20
  # end
  
  def TestMod.startTest  
    @javascript
    helper_mod = CustomExports.new

    RSpec.feature "current " do

      scenario %{panel should stretch with the options} do
        visit %{/}
        elem = first %{.p_a_n_e_l_ButtonText} 
        elem.select_option
        options = all %{.p_a_n_e_l_Option}
        1.times do |r; i|
          i = rand options.length
          options[i].select_option
        end         
        button = first %{.p_a_n_e_l_NextButton} 
        button.select_option   
        sleep 5         
        input = first %{.p_a_n_e_l_Input}
        sleep 5
        state_options = Hash.new  
        state_options[:last_element] = all %{.p_a_n_e_l_StateOption}
        state_options[:last_element] = state_options[:last_element].last 
        state_options[:css] = state_options[:last_element].style %{top},%{height}
        state_options[:text] = state_options[:last_element].text
        state_options[:amnt] = 0
        panel_Board =Hash.new 
        panel_Board[:element] = first %{.p_a_n_e_l_Board}
        panel_Board[:css] =  panel_Board[:element].style %{top},%{height}
        panel_Board[:amnt] = 0
        prc = lambda do |a|
          a[:css].each do |k,v|
            a[:amnt] = a[:amnt] + helper_mod.number_parse(v)
          end
        end
        prc.call panel_Board
        prc.call state_options
        expect(panel_Board[:amnt]-30).to be > state_options[:amnt]
      end   

    end     



    # RSpec.feature "visual regression debugging" do
    #   scenario "take a snapshot of the projects page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor projects page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 30       
    #     Percy.snapshot page, { :name => 'windsor projects page phone', :widths => [668] }
    #   end
    # end

 

    

  end


end
TestMod.startTest



=begin
  for navigation you must head to all the links
=end