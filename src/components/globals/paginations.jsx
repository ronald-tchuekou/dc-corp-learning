import React from 'react'
import PropTypes from 'prop-types'

/**
 * Pagination:
 *      count {number} : qui permet d'indiquer le nombre de page.
 *      currentPage {number} : qui permet d'indiquer le numero de la page courante.
 *      color ['primary', 'danger'] : qui permet d'indiquer la couleur de selection.
 *      size ['small', 'large'] : qui permet d'indiquer la taille de la pagination.
 *      hideNextButton : qui permet d'indiquer l'affichage ou non des bouttons de navigations
 *      handleChange {event} : qui permet d'indiquer la fonction sera executer au change de page.
 */
export class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: this.props.currentPage,
            items: this.setInitialPosition(),
        }
        this.setNewItemPosition = this.setNewItemPosition.bind(this)
        this.changeItemPosition = this.changeItemPosition.bind(this)
    }

    componentDidMount() {
        this.changeItemPosition()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.currentPage !== this.state.currentPage) {
            this.props.onChange(parseInt(this.state.currentPage))
            this.changeItemPosition()
        }
        if (prevProps.currentPage !== this.props.currentPage) {
            this.setState({ currentPage: parseInt(this.props.currentPage) })
            this.changeItemPosition()
        }
    }

    /**
     * Fonction qui peremt de changer la position des items en fonction de la page courante.
     */
    changeItemPosition() {
        let pivot = this.state.currentPage
        let { count } = this.props

        if (pivot < 5) this.setState({ items: this.setInitialPosition() })
        else if (pivot <= count - 4) this.setState({ items: this.enabledMiddle() })
        else this.setState({ items: this.setAllToRight() })
    }

    /**
     * Fonction qui pemret de paginer le milieu.
     * @returns {Array} Nouveau tableau de position.
     */
    enabledMiddle() {
        let array = []
        let pivot = this.state.currentPage
        let { count } = this.props
        array.push(1)
        array.push(-1)
        array.push(pivot - 1)
        array.push(pivot)
        array.push(pivot + 1)
        array.push(-1)
        array.push(count)
        return array
    }

    /**
     * Fonction qui permet d'initialiser les position de la pagination.
     * @returns {Array} Tableaux de positions initial.
     */
    setInitialPosition() {
        let array = []
        let { count } = this.props
        for (let i = 1; i <= count; i++) {
            if (i <= 5) array.push(i)
            else if (i === count) {
                if (array[array.length - 1] !== count - 1) array.push(-1)
                array.push(i)
            }
        }
        return array
    }

    /**
     * Fonction qui pemret de positionner le max d'item vers la droite de la pagination.
     * @returns {Array} Nouveau tableau.
     */
    setAllToRight() {
        let array = []
        let { count } = this.props
        if (count <= 7) for (let i = 1; i <= count; i++) array.push(i)
        else {
            array.push(1)
            array.push(-1)
            let pointer = count - 5
            for (let i = 2; i <= count; i++) {
                if (i > pointer) array.push(i)
            }
        }
        return array
    }

    /**
     * Fonction qui permet de changer la position de la page courante.
     * @param _val Nouvelle position.
     */
    setNewItemPosition = (_val) => {
        if (this.props.disabled) return
        this.setState((state) => {
            let new_val = state.currentPage + _val
            if (new_val <= this.props.count && new_val >= 1) return { currentPage: new_val }
        })
    }

    setColor() {
        if (this.props.color === 'primary') return 'dcx-pagination-primary'
        else if (this.props.color === 'danger') return 'dcx-pagination-danger'
    }

    setCurrentPage(_position) {
        if (_position === this.state.currentPage)
            return (
                <li key={_position}>
                    <button
                        onClick={() => {
                            if (this.props.disabled) return
                            return this.setState({ currentPage: _position })
                        }}
                        className={`transition duration-300 w-9 h-9 flex-none border border-purple-700 rounded-full text-white hover:bg-purple-700 bg-purple-600 flex items-center justify-center ${
                            this.props.size
                        } ${this.setColor()} ${this.props.disabled ? 'disabled' : ''}`}
                        aria-current={true}
                        tabIndex={0}
                        type={'button'}
                        aria-label={`Go to page ${_position}`}
                    >
                        {_position}
                    </button>
                </li>
            )
        else
            return (
                <li key={_position}>
                    <button
                        onClick={() => {
                            if (this.props.disabled) return
                            return this.setState({ currentPage: _position })
                        }}
                        className={`transition duration-300 w-9 h-9 flex-none border rounded-full text-gray-400 hover:bg-gray-100 flex items-center justify-center ${
                            this.props.size
                        } ${this.props.disabled ? 'disabled' : ''}`}
                        tabIndex={0}
                        type={'button'}
                        aria-label={`Go to page ${_position}`}
                    >
                        {_position}
                    </button>
                </li>
            )
    }

    buildPaginationItems() {
        let items = []
        if (!this.props.hideNextButton)
            items.push(
                <li key={0}>
                    <button
                        onClick={() => this.setNewItemPosition(-1)}
                        className={`transition duration-300 w-9 h-9 flex-none border rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center ${
                            this.props.size
                        } ${this.state.currentPage === 1 || this.props.disabled ? 'disabled' : ''}`}
                        tabIndex={0}
                        type={'button'}
                        aria-label="Go to previous page"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 4L7 12L15 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </li>
            )

        this.state.items.map((item, index) => {
            if (item === -1)
                items.push(
                    <li key={item + index * 100}>
                        <div
                            className={`transition duration-300 w-8 h-8 flex-none rounded-full text-gray-600 flex items-center justify-center text-2xl pb-2 ${
                                this.props.disabled ? 'disabled' : ''
                            }`}
                        >
                            …
                        </div>
                    </li>
                )
            else items.push(this.setCurrentPage(item))
        })

        if (!this.props.hideNextButton)
            items.push(
                <li key={this.props.count + 1}>
                    <button
                        onClick={() => this.setNewItemPosition(1)}
                        className={`transition duration-300 w-9 h-9 flex-none border rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center ${
                            this.props.size
                        } ${this.state.currentPage === this.props.count || this.props.disabled ? 'disabled' : ''}`}
                        tabIndex={0}
                        type={'button'}
                        aria-label="Go to next page"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 4L16 12L8 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </li>
            )
        return items
    }

    render() {
        return <ul className={'flex flex-row items-center space-x-2 py-5'}>{this.buildPaginationItems()}</ul>
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.oneOf(['default', 'primary', 'danger']),
    size: PropTypes.oneOf(['small', 'large', 'medium']),
    hideNextButton: PropTypes.bool,
    onChange: PropTypes.func,
}

Pagination.defaultProps = {
    currentPage: 1,
    count: undefined,
    color: 'default',
    size: 'medium',
    hideNextButton: false,
    onChange: function (_elt) {},
}
