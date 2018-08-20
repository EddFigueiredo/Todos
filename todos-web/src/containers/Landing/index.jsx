import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { AppButton } from 'core/components/AppButton'
import { screen, contentWrapper } from 'core/utils/theme'
import * as Blueprint from './Blueprint'

export const StepContent = styled.div`
  margin: 2rem auto;
`

export const StepHead = styled.div`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: ${props => props.theme.neutroDark};

  ${screen.mobile`
    color: ${props => props.theme.neutro};
    font-size: 3rem;
  `}
`

export const StepSubHead = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
  color: ${props => props.theme.neutroDark};

  ${screen.mobile`
    color: ${props => props.theme.neutro};
    text-align: center;
  `}
`

class Landing extends Component {
  render() {
    return (
      <section>
        <Blueprint.Grid>
          <Blueprint.Title><FormattedMessage id="landing.title" /></Blueprint.Title>
          <StepContent position="right">
            <StepHead><FormattedMessage id="heade" /></StepHead>
            <StepSubHead><FormattedMessage id="some" /></StepSubHead>
          </StepContent>
          <Blueprint.Download>
            <Blueprint.DownloadTitle><FormattedMessage id="download.title" /></Blueprint.DownloadTitle>
            <Blueprint.DownloadApp>
              <AppButton type="playstore" href={global.ENVIRONMENT_CONFIG.playStore} />
              <AppButton type="appstore" href={global.ENVIRONMENT_CONFIG.appStore} />
            </Blueprint.DownloadApp>
          </Blueprint.Download>
          <Blueprint.Footer />
        </Blueprint.Grid>
      </section>
    )
  }
}

Landing.propTypes = {}

const mapProps = () => ({})

const mapActions = {}

export default connect(mapProps, mapActions)(Landing)
