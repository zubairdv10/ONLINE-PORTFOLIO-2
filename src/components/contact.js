import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Picture from "./pic.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zubair De vries</h2>
            <img
              src={Picture}
              alt="Avatar"
              style={{ height: "280px", width: "30%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Aspiring Web Developer
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone" aria-hidden="true" />
                    (021) 704 2835
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    zubairdevries127@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
