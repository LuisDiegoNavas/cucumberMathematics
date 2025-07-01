Feature: Testing salad calculator

Scenario Outline: Let’s eat veges
  Given I add <initial> <type>
  When  I eat <consume> <type>
  Then  I have <remaining> <type>

Examples:
  | initial | consume | remaining | type      |
  | 5       | 4       | 1         | cucumbers |
  #| 10      | 12      | -2        | carrots   |

Scenario Outline: Spending more than available throws error
  Given I add <initial> <type>
  When  I eat <consume> <type>
  Then  I should see an error message saying "<errorMessage>"

Examples:
  | initial | consume | type     | errorMessage               |
  | 10      | 12      | carrots  | Not enough carrots to eat! |

Scenario Outline: Let’s make a salad!
  Given I add <initial_cucumbers> cucumbers
  And   I add <initial_carrots> carrots
  When  I make a salad with <consume_cucumbers> cucumbers and <consume_carrots> carrots
  Then  I have <remaining_cucumbers> cucumbers
  And   I have <remaining_carrots> carrots
  And   I have <salads> salad

Examples:
  | initial_cucumbers | initial_carrots | consume_cucumbers | consume_carrots | remaining_cucumbers | remaining_carrots | salads |
  | 8                 | 5               | 3                 | 2               | 5                   | 3                 | 1      |