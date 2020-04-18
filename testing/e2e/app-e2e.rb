require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'
require 'selenium/webdriver'
require 'selenium-webdriver'
load 'custom_exports.rb'



# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  include Capybara
  include Capybara::DSL
  include Capybara::Selenium
  include Selenium

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
  # puts b



  c = Capybara.register_driver :internetExplorer do |app|
    
    # p Capybara::Selenium::Driver::InternetExplorerDriver.options
    caps = {        
      :ignore_zoom_level => %{true},
      :ignore_zoom_setting => %{true},   
      :ignore_zoom_level => true,
      :ignore_zoom_setting => true,
      :ignore_protected_mode_settings => true       
    }
    Capybara::Selenium::Driver.new(
      app,
      :browser => :internet_explorer,
      :options =>  caps
    )
    
    
    
  end  
  
  p c.class
  p :internet_explorer
 

  # Capybara.default_driver = :lambdatest 
  Capybara.run_server = false  
  Capybara.default_driver = :internetExplorer
  # Capybara.default_driver = :chrome 
  # Capybara.javascript_driver = :chrome 
  # Capybara.current_driver = :chrome
  # Capybara.app_host = "https://www.sortforyou.com"
  # Capybara.app_host = "https://localhost:4200"
  # puts Capybara::Selenium
 


  Capybara.configure do |config|
    # config.default_max_wait_time = 20
    # Capybara.current_session.driver.browser.manage.window.resize_to 100, 100
  end
  
  def TestMod.startTest  
    @javascript
    helper_mod = CustomExports.new
    hosts = Hash.new 
    hosts[:prod] =  %{https://watermine.firebaseapp.com}
    # hosts[:dev] =  %{http://localhost:4200}
    # need hosts[:tests] so you dont make the ryberService and the componentObject.ts avail in production 
    
    hosts.each do |k,v|
      Capybara.app_host = v
      RSpec.feature "navigation stuff" do
        scenario "Click on start button" do
          visit '/'
          elem = first ".p_a_n_e_l_ButtonText" 
          p elem 
          elem.select_option        
          expect(page).to have_selector '.p_a_n_e_l_Option';
        end 
        scenario "Options should toggle" do
          visit '/'
          elem = first ".p_a_n_e_l_ButtonText" 
          elem.select_option        
          learn_more = Hash.new
          Capybara.ignore_hidden_elements = false 
          options = all %{.p_a_n_e_l_Option}
          optCir = all %{.p_a_n_e_l_CircleOption}
          25.times do |r; i|
            i = rand(options.length)
            learn_more[:element] = optCir[i]
            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]  

            
            options[i].select_option


            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_post] = learn_more[:background_color][%{background-color}] 
            expect(learn_more[:background_color_post]).not_to equal learn_more[:background_color_pre]           
          end 
          Capybara.ignore_hidden_elements = true
        end  
        scenario "Options should be counted in selection" do
          visit '/'
          elem = first ".p_a_n_e_l_ButtonText" 
          elem.select_option        
          learn_more = Hash.new
          Capybara.ignore_hidden_elements = false 
          options = all %{.p_a_n_e_l_Option}
          optCir = all %{.p_a_n_e_l_CircleOption}
          10.times do |r; i|
            i = rand(options.length)
            learn_more[:element] = optCir[i]
            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]  

            
            options[i].select_option


            learn_more[:background_color] = learn_more[:element].style   %{background-color}
            learn_more[:background_color_post] = learn_more[:background_color][%{background-color}] 
            expect(learn_more[:background_color_post]).not_to equal learn_more[:background_color_pre]           
          end 
          sleep 10
          my_symptoms = Array.new
          i = 0
          optCir.each do |r|
            b = r.style %{display}
            # p  r.style %{display}
            if b[%{display}]  == "block" then
              my_symptoms.push  options[i].text
              # p options[i].text
            end
            i = i + 1
          end
          Capybara.ignore_hidden_elements = true      
          button = first ".p_a_n_e_l_NextButton" 
          button.select_option
          sleep 10
          angular_symptoms = evaluate_script %Q{
            window.dgasdgasg
          }
          # p %{\n}
          # angular_symptoms.each do |k,v|
          #   p  v[%{text}]
          # end    
          # p %{\n}
          j = 0
          angular_symptoms.each do |k,v|
            p  v[%{text}]
            # p my_symptoms.include? v[%{text}]
            if my_symptoms.include? v[%{text}]  then
              j += 1
            else 
              p %{failed at #{v[%{text}] }}
              fail 
            end
          end 
          if my_symptoms.length != j  then 
            p %{failed at length}
            fail
          end

        end                        
      end

      RSpec.feature "state dropdown" do
        scenario %{chose a letter,
        only the first matching letter of the state match} do
          visit %{/}
          elem = first %{.p_a_n_e_l_ButtonText} 
          elem.select_option
          options = all %{.p_a_n_e_l_Option}
          10.times do |r; i|
            i = rand options.length
            options[i].select_option
          end         
          button = first %{.p_a_n_e_l_NextButton} 
          button.select_option   
          sleep 5         
          input = first %{.p_a_n_e_l_Input}
          state_options = nil 
          prc = lambda do |ltr|
            input.send_keys :backspace
            input.send_keys ltr if ltr != nil
            sleep 5
            state_options = all %{.p_a_n_e_l_StateOption}
          end 
          ('a'..'w').each do |letter|
            prc.call letter
            state_options.each do |state|
              expect(state.text[0]).to match letter.upcase 
            end
            sleep 5           
          end  
          prc.call nil
          sleep 5
          p state_options.length
          expect(state_options.length).to eq 50          
        end  
        
        scenario %{dropdrown option click appears in input} do
          visit %{/}
          elem = first %{.p_a_n_e_l_ButtonText} 
          elem.select_option
          options = all %{.p_a_n_e_l_Option}
          2.times do |r; i|
            i = rand options.length
            options[i].select_option
          end         
          button = first %{.p_a_n_e_l_NextButton} 
          button.select_option   
          sleep 5         
          input = first %{.p_a_n_e_l_Input}
          sleep 5
          state_options = all %{.p_a_n_e_l_StateOption}
          20.times do |i|
            clicked_dropdown = state_options[rand state_options.length].select_option
            expect(clicked_dropdown.text).to match input.value
            sleep 1
          end        
        end  

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
system %{taskkill /IM "iexplore.exe" /F}



=begin
  for navigation you must head to all the links
=end