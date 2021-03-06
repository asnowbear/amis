import React from 'react';
import {Renderer, RendererProps} from '../factory';
import {Collapse as BasicCollapse} from '../components/Collapse';
import {
  BaseSchema,
  SchemaClassName,
  SchemaCollection,
  SchemaTpl
} from '../Schema';

/**
 * Collapse 折叠渲染器，格式说明。
 * 文档：https://baidu.gitee.io/amis/docs/components/collapse
 */
export interface CollapseSchema extends BaseSchema {
  /**
   * 指定为折叠器类型
   */
  type: 'collapse';

  /**
   * 内容区域
   */
  body: SchemaCollection;

  /**
   * 配置 Body 容器 className
   */
  bodyClassName?: SchemaClassName;

  /**
   * 是否可折叠
   */
  collapsable?: boolean;

  /**
   * 默认是否折叠
   */
  collapsed?: boolean;

  /**
   * 标题 CSS 类名
   */
  headingClassName?: string;

  /**
   * 标题
   */
  title?: SchemaTpl;

  /**
   * 控件大小
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'base';
}

export interface CollapseProps
  extends RendererProps,
    Omit<CollapseSchema, 'type'> {
  wrapperComponent?: any;
  headingComponent?: any;

  // 内容口子
  children?: JSX.Element | ((props?: any) => JSX.Element);
}

export interface CollapseState {
  collapsed: boolean;
}

export default class Collapse extends React.Component<
  CollapseProps,
  CollapseState
> {
  static propsList: Array<string> = [
    'wrapperComponent',
    'headingComponent',
    'bodyClassName',
    'collapsed',
    'headingClassName'
  ];

  static defaultProps: Partial<CollapseProps> = {
    wrapperComponent: 'div',
    headingComponent: 'h4',
    className: '',
    headingClassName: '',
    bodyClassName: '',
    collapsable: true
  };

  state = {
    collapsed: false
  };

  constructor(props: CollapseProps) {
    super(props);

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.state.collapsed = !!props.collapsed;
  }

  componentWillReceiveProps(nextProps: CollapseProps) {
    const props = this.props;

    if (props.collapsed !== nextProps.collapsed) {
      this.setState({
        collapsed: !!nextProps.collapsed
      });
    }
  }

  toggleCollapsed() {
    this.props.collapsable !== false &&
      this.setState({
        collapsed: !this.state.collapsed
      });
  }

  render() {
    const {
      classPrefix: ns,
      classnames: cx,
      size,
      wrapperComponent: WrapperComponent,
      headingComponent: HeadingComponent,
      className,
      title,
      headingClassName,
      children,
      body,
      bodyClassName,
      render,
      collapsable
    } = this.props;

    return (
      <WrapperComponent
        className={cx(
          `Collapse`,
          {
            'is-collapsed': this.state.collapsed,
            [`Collapse--${size}`]: size,
            'Collapse--collapsable': collapsable
          },
          className
        )}
      >
        {title ? (
          <HeadingComponent
            onClick={this.toggleCollapsed}
            className={cx(`Collapse-header`, headingClassName)}
          >
            {render('heading', title)}
            {collapsable && <span className={cx('Collapse-arrow')} />}
          </HeadingComponent>
        ) : null}

        <BasicCollapse
          show={collapsable ? !this.state.collapsed : true}
          classnames={cx}
          classPrefix={ns}
        >
          <div className={cx(`Collapse-body`, bodyClassName)}>
            {children
              ? typeof children === 'function'
                ? children(this.props)
                : children
              : body
              ? render('body', body)
              : null}
          </div>
        </BasicCollapse>
      </WrapperComponent>
    );
  }
}

@Renderer({
  test: /(^|\/)collapse$/,
  name: 'collapse'
})
export class CollapseRenderer extends Collapse {}
