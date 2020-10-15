Feature: Get Price Quote Service
  New and old customers want to get a price quote for our service before they buy it.

  Scenario: I need a quote for home insurance
    Given I am at the get quote page
    When I fill out my home address and the type of service I’m requesting
    Then I can see a price quote for the service I chose.

    Given I am at the get quote page
    And I select the service type
    When I leave my home address blank
    Then I see a message to provide my home address
