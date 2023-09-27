import { createGlobalStyle } from "styled-components";

const darkObj = {
  mediumDark: "#2d2d2d",
  dark: "#202020",
  text: "#DADADA",
  light: "#2D2D2D",
  dropdownBg: "#373737",
  lightShadow: "0px 0px 6px 0px #5b5a5a",
};

const lightObj = {
  strongBlack: "#2E2F41",
  mediumBlack: "#3F4254",
  light: "#f7f7f7",
  mediumLight: "#e5e2e2",
  text: "#2d2d2d",
  dropdownBg: "#e5e2e2",
};

export const GlobalStyles = createGlobalStyle<{ $isDarkTheme: boolean }>`
@import url('https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap');
    body {
        background-color: ${({ theme }) => theme.medium};
        color: ${({ theme }) => theme.text};
        font-family: 'Martian Mono', monospace;
        transition: 200ms ease;
    }

    .medium{
        background-color: ${({ theme }) => theme.medium};
        color: ${({ theme }) => theme.text};

        .light{
            background-color: ${({ theme }) => theme.light};
            box-shadow: ${({ theme }) => theme.shadow};
            color: ${({ theme }) => theme.text};
        }
    }

    .navbar{
        background-color: ${({ theme }) => theme.strong};
        color: ${({ theme }) => (theme.$isDarkTheme ? theme.text : "white")};


        .searchbar-wrapper{
            background-color: ${({ theme }) => theme.input};
            color: ${({ theme }) => theme.text};

         }
         .write-wrapper{
        background-color: ${({ theme }) =>
          theme.$isDarkTheme ? theme.button : "#e28140"};
        color: ${({ theme }) => (theme.$isDarkTheme ? theme.text : "white")};
         }

         .active{
             background-color: ${({ theme }) => theme.button};
         }

         a{
            color: white;
         }
    }

    .dropdown{
        background-color: ${({ theme }) => theme.dropdown};
        color: ${({ theme }) => theme.text};

        .article-wrapper{
            color: ${({ theme }) =>
              !theme.$isDarkTheme ? "black" : theme.text};
            background-color: ${({ theme }) =>
              theme.$isDarkTheme ? theme.button : "#e5e2e2"};
            
             &:hover{
                color: ${({ theme }) =>
                  !theme.$isDarkTheme ? "white" : theme.button};
                background-color: ${({ theme }) =>
                  theme.$isDarkTheme ? "#e5e2e2" : theme.button};
              }
        }
    }

    input{
        background-color: ${({ theme }) => theme.input};
        color: ${({ theme }) => (theme.$isDarkTheme ? theme.text : "white")};
    }

    button{
        background-color: ${({ theme }) => theme.button};
        color: ${({ theme }) => theme.text};
    }

    a{
        background-color: ${({ theme }) => theme.button};
        color: ${({ theme }) => theme.text};
    }

    .link{
        background-color: transparent;
        color: ${({ theme }) => theme.text};
    }

    .card-wrapper{
        .article-wrapper{
            box-shadow: ${({ theme }) => theme.shadow};
            background-color: ${({ theme }) => theme.dark}
        }
    }

    .trending-wrapper{
        background-color: ${({ theme }) =>
          theme.$isDarkTheme ? theme.strong : theme.mediumLight};
        color: ${({ theme }) => theme.text};

        .articles-wrapper{
            background-color: ${({ theme }) =>
              theme.$isDarkTheme ? theme.strong : "#e5e2e2"};
            color: ${({ theme }) => theme.text};
        }

        a{
            background-color: ${({ theme }) => theme.light};
           box-shadow: ${({ theme }) => theme.shadow};
        }
    }

    form{
        background-color: ${({ theme }) =>
          !theme.$isDarkTheme ? theme.strong : theme.input};
        color: ${({ theme }) => (theme.$isDarkTheme ? theme.text : "white")};

        a{
            background-color: transparent;
            color: whitesmoke;
        }
    }

    .heart{
        color: gray;
    }

    .article-page{
      color: ${({ theme }) => (theme.$isDarkTheme ? "black" : "white")};
              background-color: ${({ theme }) =>
                !theme.$isDarkTheme ? theme.strong : theme.mediumBlack};;
      .article-wrapper{
        background-color: ${({ theme }) =>
          theme.$isDarkTheme ? theme.strong : "#2D2D2D"};;
      }
        .article-wrapper > .content{
                 background-color: ${({ theme }) =>
                   theme.$isDarkTheme ? theme.strong : ""};
        }      
       
    
    }

   .loader-dots > div > div{
      background-color: ${({ theme }) =>
        !theme.$isDarkTheme ? theme.text : theme.strong};
   }

   .loader-spinner {
        .lds-ring div{
          border-color: ${({ theme }) =>
            theme.$isDarkTheme
              ? `${theme.text} transparent transparent transparent;`
              : `${theme.text} transparent transparent transparent;`};
        }
   }

   .auth-page{
      background-color: ${({ theme }) =>
        !theme.$isDarkTheme ? theme.mediumLight : theme.strong};
   }


.article-change{
        background-color: ${({ theme }) =>
          theme.$isDarkTheme ? theme.strong : theme.mediumLight};
 form{ 
  background-color: ${({ theme }) =>
    theme.$isDarkTheme ? "#2D2D2D" : theme.input};
    color: ${({ theme }) => (!theme.$isDarkTheme ? "white" : "black")};
    div{
    input{
       color: white;
    }
  }
 }
}
`;

export const lightTheme = {
  medium: lightObj.light,
  strong: lightObj.strongBlack,
  light: lightObj.light,
  mediumLight: lightObj.mediumLight,
  text: lightObj.text,
  input: lightObj.mediumBlack,
  button: lightObj.mediumBlack,
  dropdown: lightObj.dropdownBg,
  shadow: darkObj.lightShadow,
};

export const darkTheme = {
  medium: darkObj.mediumDark,
  strong: darkObj.dark,
  light: darkObj.light,
  text: darkObj.text,
  input: darkObj.light,
  button: darkObj.light,
  dropdown: darkObj.dropdownBg,
  shadow: darkObj.lightShadow,
};
