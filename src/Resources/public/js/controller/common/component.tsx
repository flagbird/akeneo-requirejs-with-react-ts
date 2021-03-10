import React from 'react';

interface MyProp {
}

export default class Component extends React.Component<MyProp>
{
    appliedState: string = '';

    state: {value: string, search: string} = {
        value: '',
        search: '',
    };

    render() {
        return (
            <div className="AknDefault-contentWithColumn" data-drop-zone="column">
                <div className="AknDefault-thirdColumnContainer">
                    <div className="AknDefault-thirdColumn" data-drop-zone="tree">tree</div>
                </div>
                <div className="AknDefault-contentWithBottom" data-drop-zone="bottom-panel">
                    <div className="AknDefault-mainContent entity-edit-form edit-form">
                        <header className="AknTitleContainer navigation">
                            <div className="AknTitleContainer-line">
                                <div className="AknTitleContainer-imageContainer" data-drop-zone="main-image">
                                    <img alt="neu" className="AknTitleContainer-image" src="/bundles/pimui/images/info-user.png" />
                                </div>
                                <div className="AknTitleContainer-mainContainer">
                                    <div>
                                        <div className="AknTitleContainer-line">
                                            <div className="AknTitleContainer-backLink"
                                                 data-drop-zone="breadcrumb-back-link">
                                            </div>
                                            <div className="AknTitleContainer-breadcrumbs" data-drop-zone="breadcrumbs">
                                                <div>
                                                    <nav aria-label="Breadcrumb">
                                                        <a
                                                            target="_self"
                                                            rel=""
                                                            className="breadcrumb-tab"
                                                        >Root</a>
                                                        <span aria-hidden="true">/</span>
                                                        <a
                                                            target="_self"
                                                            rel=""
                                                            className="breadcrumb-item"
                                                            aria-current="page"
                                                        >current breadcrumb</a>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="AknTitleContainer-buttonsContainer">
                                                <div className="AknTitleContainer-userMenuContainer user-menu"
                                                     data-drop-zone="user-menu">{/*user-menu*/}
                                                    <div className="AknTitleContainer-userMenu" />
                                                </div>
                                                <div className="AknTitleContainer-actionsContainer AknButtonList"
                                                     data-drop-zone="buttons">
                                                    <button onClick={(/*e: React.MouseEvent<HTMLButtonElement>*/) => {
                                                        this.appliedState = this.state.value;
                                                        this.forceUpdate();
                                                    }} className="AknButton AknButton--apply">
                                                        Apply your changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="AknTitleContainer-line">
                                            <div className="AknTitleContainer-title" data-drop-zone="title">title</div>
                                            <div className="AknTitleContainer-state" data-drop-zone="state">
                                                <div id="entity-updated" style={{opacity: this.appliedState === this.state.value ? 0 : 100}}>
                                                    <span className="AknState">Changes were not applied</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="AknTitleContainer-line">
                                            <div className="AknTitleContainer-context AknButtonList"
                                                 data-drop-zone="context">Space for your header context or description
                                            </div>
                                        </div>
                                        <div className="AknTitleContainer-line">
                                            <div className="AknTitleContainer-meta AknButtonList"
                                                 data-drop-zone="meta">Space for some meta info
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AknTitleContainer-line">
                                <div data-drop-zone="navigation" className="AknTitleContainer-navigation">navigation
                                </div>
                            </div>
                            <div className="AknTitleContainer-line">
                                <div data-drop-zone="search" className="AknTitleContainer-search search-zone">
                                    <input className="AknFilterBox-search"
                                           maxLength={255}
                                           autoComplete="non"
                                           type="text"
                                           name="search"
                                           value={this.state.search}
                                           placeholder="Search, but find nothing"
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                               this.setState({
                                                   search: e.target.value,
                                               });
                                           }}
                                    />
                                </div>
                            </div>
                        </header>

                        <div data-drop-zone="content" className="content">
                            <p style={{marginTop: "20px"}}>Form field:</p>
                            <p>
                            <input type="text" value={this.state.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                this.setState({
                                    value: e.target.value,
                                });
                            }} />
                            </p>
                            <p><b>{this.state.value}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
